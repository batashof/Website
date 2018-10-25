import React, { Component } from "react";
import "./related-case-studies.css";
import ReactSVG from "react-svg";

import { Link, Redirect } from "react-router-dom";
import { Layout } from "../../components";

export default class RelatedCaseStudies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      data: {}
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  deleteCaseStudy(data) {
    const id = this.props.id;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data.splice(i, 1);
      }
    }
    this.setState({
      loading: false,
      data: data
    });
  }

  getUrl() {
    const sectors = this.props.sectors;
    const industriesQuery = sectors
      .map(industry => "industry[]=" + encodeURIComponent(industry))
      .join("&");
    return `/api/case-studies?${industriesQuery}`;
  }

  fetchData() {
    fetch(this.getUrl()).then(res => {
      if (res.status !== 200) {
        this.setState({ error: true });
      }
      if (res.status === 200) {
        res.json().then(res => {
          this.deleteCaseStudy(res["case-studies"]);
        });
      }
    });
  }

  relatedTile(id, color) {
    let tileColor = "Related-item Related-item_color_" + color;
    if (this.state.data[id]) {
      return (
        <Link
          className={tileColor}
          to={`/case-study/${this.state.data[id].id}`}
        >
          <img width="50%" src={this.state.data[id].logo} alt="logo" />
          <div className="Related-item__title">
            <span>{this.state.data[id].title}</span>
            <ReactSVG path="/icons/arrow.svg" className="Related-item__arrow" />
          </div>
        </Link>
      );
    }
    return false;
  }

  renderRelatedCaseStudies() {
    if (!this.state.data[0]) {
      return false;
    }
    return (
      <Layout
        width="half_position_left"
        name="Related"
        title="RELATED CASE STUDIES"
        text={[
          "Intrigued but you’d like some more info? Have a look at what some of our other clients have to say about working with us."
        ]}
      >
        {this.relatedTile(0, "white")}
        {this.relatedTile(1, "black")}
      </Layout>
    );
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/error/" />;
    }
    if (this.state.loading) {
      return <div>Loading…</div>;
    }
    return this.renderRelatedCaseStudies();
  }
}
