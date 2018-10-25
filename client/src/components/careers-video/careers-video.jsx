import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import "./careers-video.css";
import Input from "../input/input";
import Button from "../button/button";
import { youtubePlayer } from "../../services/youtube-preview.js";

export default class CareersVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { isPreview: true };
  }
  closeVideo() {
    this.setState({ isPreview: true });
    this.playerControls.ruin();
  }
  playVideo() {
    this.setState({ isPreview: false });
    this.playerControls.ruin();
  }

  componentDidMount() {
    this.playerControls = youtubePlayer({
      player: this.refs.iframeVideo,
      videoId: this.props.videoId,
      isPreview: this.state.isPreview,
      startTime: this.props.startTime,
      previewDuration: this.props.previewDuration
    });
  }

  componentDidUpdate() {
    this.playerControls = youtubePlayer({
      player: this.refs.iframeVideo,
      videoId: this.props.videoId,
      isPreview: this.state.isPreview,
      startTime: this.props.startTime,
      previewDuration: this.props.previewDuration
    });
  }

  defineClass() {
    if (this.state.isPreview) {
      return "CareersVideo__wrap";
    }
    return "CareersVideo__wrap CareersVideo__wrap_hidden";
  }
  toggleVideo() {
    if (this.state.isPreview) {
      return "CareersVideo";
    }
    return "CareersVideo CareersVideo_playing";
  }
  render() {
    return (
      <section className={this.toggleVideo()}>
        <div className={this.defineClass()}>
          <h2 className="CareersVideo__title">
            We`re on the lookout for bright and
            <span className="CareersVideo__title_bold">innovative minds</span>
            to join us. Think you fit the bill?
          </h2>
          <div className="CareersVideo__vacancies">
            <span> Check out our current vacancies for</span>
            <span className="CareersVideo__departments">
              <Link
                className="CareersVideo__departments-link"
                to="http://careers.godeltech.com/en/careers/category/marketing/"
              >
                Marketing
              </Link>
              <span className="CareersVideo__departments-symbol">/</span>
              <Link
                className="CareersVideo__departments-link"
                to="http://careers.godeltech.com/en/careers/category/sales/"
              >
                Sales
              </Link>
            </span>
          </div>
          <form action="" className="CareersVideo__form">
            <Input placeholder="Search for Job e.g. Developer, Marketing" />
            <Button shape="square" color="green" hover="blue" arrow="right" />
          </form>
          <ReactSVG
            path="/icons/down-arrow.svg"
            className="CareersVideo__arrow"
          />
        </div>
        <div className="CareersVideo__button" onClick={e => this.playVideo(e)}>
          <span className="CareersVideo__button-text">Play Full Video</span>
          <Button
            shape="square"
            color="aqua"
            hover="green"
            icon="play"
            arrow="none"
          />
        </div>

        <div className="CareersVideo__video" ref="iframeVideo" />
        <div
          className="CareersVideo__close-video"
          onClick={e => this.closeVideo(e)}
        >
          ✕
        </div>
      </section>
    );
  }
}
CareersVideo.defaultProps = {
  videoId: "MD-Eap64JcQ",
  startTime: 10,
  previewDuration: 5
};
