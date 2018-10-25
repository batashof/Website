import React, { Component } from "react";
import "./case-study-spoiler.css";
import Button from "../button/button";
import ServiceTile from "../service-tile/service-tile";
import Video from "../video/video";

export default class CaseStudySpoiler extends Component {
  buildClass() {
    return [
      "CaseStudySpoiler",
      "CaseStudySpoiler_bg_" + this.props.bg,
      this.props.videoId ? "CaseStudySpoiler_video" : ""
    ].join(" ");
  }

  defineVideo() {
    if (this.props.videoId) {
      return <Video videoId={this.props.videoId} size="s" />;
    }
    return;
  }

  defineImg() {
    if (this.props.img) {
      return <img src={this.props.img} alt={this.props.title} />;
    }
    return;
  }

  render() {
    return (
      <div className={this.buildClass()}>
        <h2 className="CaseStudySpoiler__title">{this.props.title}</h2>
        <div className="CaseStudySpoiler__content">
          <div className="CaseStudySpoiler__content-wrap">
            <div className="CaseStudySpoiler__inner">
              <div className="CaseStudySpoiler__descr">
                <ul className="CaseStudySpoiler__list">
                  <li className="CaseStudySpoiler__item">
                    <ServiceTile
                      division="services"
                      icon={false}
                      values={this.props.services}
                    />
                  </li>
                  <li className="CaseStudySpoiler__item">
                    <ServiceTile
                      division="technologies"
                      icon={false}
                      values={this.props.technologies}
                    />
                  </li>
                  <li className="CaseStudySpoiler__item">
                    <ServiceTile
                      division="model"
                      icon={false}
                      values={this.props.model}
                    />
                  </li>
                  <li className="CaseStudySpoiler__item">
                    <ServiceTile
                      division="duration"
                      icon={false}
                      value={this.props.duration}
                    />
                  </li>
                </ul>

                <Button
                  shape="rect"
                  color="green"
                  hover="trans-white"
                  icon="greenArrow"
                  href={"/case-study/" + this.props.href}
                  text="The Mission"
                >
                  View full case study
                </Button>
              </div>
              <div className="CaseStudySpoiler__media">
                <div className="CaseStudySpoiler__logo">{this.defineImg()}</div>
                <div className="CaseStudySpoiler__video">
                  {this.defineVideo()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
