import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import queryString from "querystring";

import {
  Button,
  Pagination,
  Video,
  JobsFilter,
  Loading,
  SocialLinks
} from "../../components";
import "./jobs-list-page.css";

export default class JobListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      divisionFilter: "",
      locationFilter: "",
      isVideo: false,
      videoId: "",
      data: []
    };
    this.url = queryString.parse(global.location.search);
    const filter = global.location.search;
    this.fetchJobs(filter);
  }
  isVideo() {
    let value = this.url.division;
    let videoId = "";
    const videoIdList = [
      { id: "net", videoId: "jJd5SGqyEpQ" },
      { id: "auto-qa", videoId: "T8cRSnid7QU" },
      { id: "php", videoId: "xTXLwlY_gTM" }
    ];
    videoIdList.forEach(item => {
      if (item.id === value) {
        videoId = item.videoId;
        this.setState({
          isVideo: true,
          videoId: videoId
        });
      }
    });
  }
  componentDidMount() {
    this.isVideo();
  }

  fetchJobs(filter) {
    fetch(`/api/jobs${filter}`).then(res => {
      if (res.status !== 200) {
        return this.setState({ error: true });
      }
      res.json().then(result => {
        this.setState({
          data: result.jobs,
          loading: false
        });
      });
    });
  }

  fetchFiltredJobs(division, location) {
    fetch(`/api/jobs?division=${division}&location=${location}`).then(res => {
      if (res.status !== 200) {
        return this.setState({ error: true });
      }
      res.json().then(result => {
        this.setState({
          data: result.jobs,
          loading: false
        });
      });
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      divisionFilter: newProps.divisionFilter !== this.state.divisionFilter
    });
  }

  filterJobs(location, division) {
    let UrlLocation = location;
    let UrlDivision = division;
    if (location === undefined) {
      UrlLocation = "";
    }
    if (division === undefined) {
      UrlDivision = "";
    }
    global.location.search = `?location=${UrlLocation}&division=${UrlDivision}`;
  }

  renderPreview() {
    const jobsList = this.state.data;

    return jobsList.map((item, index) => {
      return (
        <li className="JobListPage__preview-item" key={item.spoiler + index}>
          <h3 className="JobListPage__preview-title">{item.position}</h3>
          <span className="JobListPage__preview-location">
            <span>Location</span>
            <span className="JobListPage__preview-devider">|</span>
            <span className="JobListPage__preview-city">{item.location}</span>
          </span>
          <ReactMarkdown
            source={item.spoiler}
            className="JobListPage__preview-text"
          />
          <Button
            color="green"
            hover="trans"
            arrow="right"
            href={"/jobs/" + item.url}
          >
            View full details
          </Button>
        </li>
      );
    });
  }
  render() {
    if (this.state.error) {
      return <Redirect to="/" />;
    }
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <main className="JobListPage">
        <section
          className={
            this.state.isVideo ? "JobListPage__top_hidden" : "JobListPage__top"
          }
        >
          <h1 className="JobListPage__top-title">Career Opportunities</h1>
        </section>
        <section
          className={
            this.state.isVideo
              ? "JobListPage__video"
              : "JobListPage__video_hidden"
          }
        >
          <Video videoId={this.state.videoId} />
        </section>
        <section className="JobListPage__filter">
          <div className="JobListPage__wrap JobListPage__wrap_filter">
            <JobsFilter
              onStateChange={(location, division) =>
                this.filterJobs(location, division)
              }
            />
            <SocialLinks color="white" />
          </div>
        </section>
        <section className="JobListPage__content ">
          <div className="JobListPage__wrap ">
            <h2 className="JobListPage__content-title">ALL JOBS</h2>
            <ul className="JobListPage__content-list">
              {this.renderPreview()}
            </ul>
            <Pagination />
          </div>
        </section>
      </main>
    );
  }
}
