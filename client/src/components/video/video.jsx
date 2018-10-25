import React, { Component } from "react";
import "./video.css";
import { Button } from "..";
import { youtubePlayer } from "../../services/youtube-preview.js";
export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreview: true
    };
    this.closeVideo = this.closeVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  componentDidMount() {
    this.playerControls = youtubePlayer({
      player: this.refs.iframeVideo,
      videoId: this.props.videoId,
      isPreview: this.state.isPreview
    });
  }

  restartPlayer() {
    this.playerControls.ruin();
    this.playerControls = youtubePlayer({
      player: this.refs.iframeVideo,
      videoId: this.props.videoId,
      isPreview: this.state.isPreview
    });
  }

  closeVideo() {
    this.setState(
      {
        isPreview: true
      },
      () => this.restartPlayer()
    );
  }

  playVideo() {
    this.setState(
      {
        isPreview: false
      },
      () => this.restartPlayer()
    );
  }

  hideContent() {
    return this.props.text ? "Video__info" : "Video__info Video__info_hidden";
  }
  defineClass() {
    let arr = ["Video", "Video_size_" + this.props.size];
    if (!this.state.isPreview) {
      arr.push("Video_playing");
    }
    return arr.join(" ");
  }

  render() {
    return (
      <div className={this.defineClass()}>
        <div className="VideoPlayer" ref="iframeVideo" />
        <div
          className={
            this.state.isPreview
              ? "Video__spoiler"
              : "Video__spoiler Video__spoiler_hidden"
          }
        >
          <div className="Video__filter" />
          <div className="Video__content-wrap">
            <div
              className="Video__play-button"
              onClick={e => this.playVideo(e)}
            >
              <Button
                shape="square"
                color="green"
                hover="blue"
                icon="play"
                arrow="none"
              />
              <span>Play Video</span>
            </div>
            <div className={this.hideContent()}>
              <p className="Video__text">{this.props.text}</p>

              <p className="Video__authors">
                <a className="Video__company" href={this.props.link}>
                  {this.props.company}
                </a>
                <span className="Video__author">{this.props.author} </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            this.state.isPreview
              ? "Video__close-video Video__close-video_hidden"
              : "Video__close-video"
          }
          onClick={e => this.closeVideo(e)}
        >
          ✕
        </div>
      </div>
    );
  }
}
Video.defaultProps = { size: "l" };
