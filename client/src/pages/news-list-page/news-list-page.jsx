import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  NewsSpoiler,
  Pagination,
  NewsPreview,
  Loading,
  NewsSearch
} from "../../components";
import "./news-list-page.css";
import queryString from "querystring";
import { defineUrl } from "../../services/define-url.js";

export default class NewsPage extends Component {
  constructor(props) {
    super(props);

    const parsed = queryString.parse(global.location.search);
    let page = Number(parsed.page) || 1;
    let search = parsed.search || false;

    this.state = {
      loading: true,
      news: [],
      page,
      search
    };

    this.fetchNews();

    this.searchHandler = this.searchHandler.bind(this);
  }

  componentWillReceiveProps() {
    const parsed = queryString.parse(global.location.search);

    this.setState(
      {
        page: Number(parsed.page) || 1,
        search: parsed.search || false
      },
      () => this.fetchNews()
    );
  }

  fetchNews() {
    let req = `/api/news?page_size=10&page=${this.state.page}`;

    if (this.state.search) {
      req += `&search=${this.state.search}`;
    }

    fetch(req).then(res => {
      if (res.status !== 200) {
        return this.setState({ error: true });
      }

      res.json().then(result => {
        this.setState({
          news: result.news,
          loading: false,
          pageCount: result.meta.pages,
          hidePrev: this.state.page === 1 ? true : false,
          hideNext: this.state.page === result.meta.pages ? true : false
        });
      });
    });
  }

  renderNews(newsItem) {
    if (this.state.news.length === 0) {
      return (
        <span className="NewsPage__notice">
          Sorry, your search returned no results. Please try another query.
        </span>
      );
    }
    return (
      <React.Fragment>
        {this.state.news.map(newsItem => (
          <NewsPreview
            key={newsItem.title}
            text={newsItem.spoiler}
            title={newsItem.title}
            date={newsItem.date}
            image={newsItem.coverImage}
            href={defineUrl(newsItem)}
            news={newsItem}
            views={153}
          />
        ))}
        <Pagination
          numbers={true}
          navButtons={false}
          maxPages={5}
          currentPage={this.state.page}
          pages={this.state.pageCount}
          onPageChange={value => this.onPageChange(value)}
          hidePrev={this.state.hidePrev}
          hideNext={this.state.hideNext}
        />
      </React.Fragment>
    );
  }

  renderNewsSpoilers(newsItem, index) {
    while (index < 2) {
      return (
        <NewsSpoiler
          key={newsItem.title}
          title={newsItem.title}
          src={newsItem.spoilerImage}
          alt={newsItem.title}
          href={defineUrl(newsItem)}
        >
          {newsItem.spoiler}
        </NewsSpoiler>
      );
    }
  }

  onPageChange(value) {
    let page;
    switch (value) {
      case "next":
        page = this.state.page + 1;
        break;
      case "previous":
        page = this.state.page - 1;
        break;
      default:
        page = value;
    }

    if (page > 0 && page <= this.state.pageCount) {
      this.setState({
        page,
        hidePrev: page === 1 ? true : false,
        hideNext: page === this.state.pageCount ? true : false
      });

      let url;

      if (this.state.search) {
        url = `?search=${this.state.search}&page=${page}`;
      } else {
        url = `?page=${page}`;
      }

      this.props.history.push(url);
    }
  }

  searchHandler(value) {
    this.setState({
      search: value
    });

    this.props.history.push(`?search=${value}`);
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/" />;
    }

    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <main className="NewsPage">
        <section className="NewsPage__head">
          <div className="NewsPage__head-filter" />
          <h1 className="NewsPage__head-title">Latest News</h1>
        </section>
        <section className="NewsPage__search">
          <div className="NewsPage__wrap">
            <NewsSearch onSearchSubmit={this.searchHandler} />
          </div>
        </section>
        <section className="NewsPage__main">
          <div className="NewsPage__wrap NewsPage__wrap_main">
            <div className="NewsPage__content NewsPage__content_list">
              {this.renderNews()}
            </div>
            <aside className="NewsPage__aside">
              <h3 className="NewsPage__aside-title">Popular posts</h3>
              {this.state.news.map((newsItem, index) =>
                this.renderNewsSpoilers(newsItem, index)
              )}
            </aside>
          </div>
        </section>
      </main>
    );
  }
}
