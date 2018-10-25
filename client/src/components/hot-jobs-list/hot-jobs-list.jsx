import React, { Component } from "react";
import { Carousel, Button } from "../../components";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import "./hot-jobs-list.css";

export default class HotJobsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
    this.getJobs();
  }

  cutSpoiler(text) {
    let spoiler = text.length > 120 ? text.substr(0, 120) + "..." : text;
    return spoiler;
  }

  getJobs() {
    fetch(`/api/jobs?featured=true`).then(res => {
      res.json().then(result => {
        this.setState({
          data: result.jobs
        });
      });
    });
  }

  defineJobs() {
    if (this.state.data) {
      return (
        <div className="HotJobsList__carousel">
          <Carousel
            sizeL={this.state.data.length < 3 ? this.state.data.length : 3}
            sizeM={this.state.data.length === 1 ? 1 : 2}
            sizeS={1}
            controls="out"
          >
            {this.state.data.map(vacancy => {
              return (
                <div className="HotJobsList__card" key={vacancy.position}>
                  <h4 className="HotJobsList__position">{vacancy.position}</h4>
                  <span className="HotJobsList__location">
                    Location | {vacancy.location}
                  </span>
                  <p className="HotJobsList__spoiler">
                    {this.cutSpoiler(vacancy.spoiler)}
                  </p>
                  <Button
                    color="trans"
                    shape="pseudo"
                    arrow="right"
                    href={`/jobs/${vacancy.url}`}
                    className="HotJobsList__link"
                  >
                    View full details
                  </Button>
                </div>
              );
            })}
          </Carousel>
        </div>
      );
    }
  }

  render() {
    return (
      <section className="HotJobsList">
        <div className="HotJobsList__wrap">
          <Link to="/jobs/" className="HotJobsList__btn">
            <strong className="HotJobsList__btn-title">Featured Jobs</strong>
            <span className="HotJobsList__btn-text">
              Visit our job page for all the latest positions
            </span>
            <ReactSVG
              path="/icons/arrow.svg"
              wrapperClassName="HotJobsList__btn-icon"
            />
          </Link>
          {this.defineJobs()}
        </div>
      </section>
    );
  }
}
