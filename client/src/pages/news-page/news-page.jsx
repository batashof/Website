import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Redirect } from "react-router-dom";

import {
  NewsIcons,
  NewsSpoiler,
  Pagination,
  Loading,
  NewsSearch
} from "../../components";
import { defineUrl } from "../../services/define-url.js";

export default class NewsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      news: {},
      newsSpoilers: []
    };

    this.fetchNews();

    this.searchHandler = this.searchHandler.bind(this);
  }

  fetchNewsPreview() {
    fetch(`/api/news`).then(res => {
      if (res.status !== 200) {
        return this.setState({ error: true });
      }
      res.json().then(result => {
        this.setState({
          newsSpoilers: result.news
        });
      });
    });
  }

  fetchNews() {
    const { id } = this.props.match.params;

    this.fetchNewsPreview();

    fetch(`/api/news/${id}`).then(res => {
      if (res.status !== 200) {
        return this.setState({ error: true });
      }
      res.json().then(result => {
        this.setState({
          loading: false,
          news: result["news-item"],
          meta: result["meta"]
        });
      });
    });
  }

  componentWillReceiveProps() {
    this.setState(
      {
        page: this.props.match.params.id
      },
      () => this.fetchNews()
    );
  }

  onPageChange(value) {
    let page;

    if (value === "next" && this.state.meta.next) {
      page = this.state.meta.next;
    }
    if (value === "previous" && this.state.meta.prev) {
      page = this.state.meta.prev;
    }

    if (page) {
      this.props.history.push(page);
    }
  }

  renderSpoilers(countNews) {
    const newsSpoilers = this.state.newsSpoilers.slice(0, countNews + 1);
    let newsSpoilersList = newsSpoilers
      .filter(spoilerData => spoilerData.id !== this.state.news.id)
      .slice(0, countNews);
    return newsSpoilersList.map((spoilerData, index) => (
      <NewsSpoiler
        key={spoilerData.title}
        title={spoilerData.title}
        src={spoilerData.spoilerImage}
        alt={spoilerData.title}
        href={defineUrl(spoilerData)}
      >
        {spoilerData.spoiler}
      </NewsSpoiler>
    ));
  }

  searchHandler(value) {
    this.props.history.push(`/news?search=${value}`);
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
            <div className="NewsPage__content">
              <NewsIcons
                news={this.state.news}
                date={this.state.news.date}
                views={999}
              />
              <div className="NewsPage__content-main">
                <img
                  className="NewsPage__content-img"
                  src={this.state.news.spoilerImage}
                  alt={this.state.news.title}
                />
                <h2 className="NewsPage__content-title">
                  {this.state.news.title}
                </h2>
                <ReactMarkdown source={this.state.news.content} />
                <Pagination
                  onPageChange={e => this.onPageChange(e)}
                  numbers={false}
                  navButtons={true}
                  hideNext={this.state.meta.next ? false : true}
                  hidePrev={this.state.meta.prev ? false : true}
                />
              </div>
            </div>
            <aside className="NewsPage__aside">
              <h3 className="NewsPage__aside-title">Popular posts</h3>
              {this.renderSpoilers(2)}
            </aside>
          </div>
        </section>
      </main>
    );
  }
}
