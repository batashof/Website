import React, { Component } from "react";
import { Carousel, Video } from "../../components";
import "./video-carousel.css";

export default class VideoCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [0],
      active: 0,
      offset: "",
      inTransition: false
    };

    this.companies = this.props.companies;

    this.clickHandler = this.clickHandler.bind(this);
  }

  renderControls() {
    return (
      <Carousel size={3} controls={this.companies.length > 3 ? "out" : false}>
        {this.companies.map((company, index) => (
          <div
            className={
              this.state.active === index
                ? "VideoCarousel__controls-item VideoCarousel__controls-item_active"
                : "VideoCarousel__controls-item"
            }
            key={company.logo}
            onClick={e => this.clickHandler(index)}
          >
            <img src={company.logo} alt={company.title} />
          </div>
        ))}
      </Carousel>
    );
  }

  renderVideo() {
    return this.state.items.map(item => {
      const company = this.companies[item];
      return (
        <Video
          key={company.video.videoID}
          videoId={company.video.videoID}
          text={company.feature}
          company={company.title}
          author={company.agents}
          link={company.link}
        />
      );
    });
  }

  clickHandler(index) {
    if (index === this.state.active) return;

    if (this.timeout) {
      return;
    } else {
      this.timeout = true;
      let direction;

      if (index > this.state.active) {
        direction = "left";
      }

      if (index < this.state.active) {
        direction = "right";
      }

      if (this.state.active === this.companies.length - 1 && index === 0) {
        direction = "left";
      }

      if (this.state.active === 0 && index === this.companies.length - 1) {
        direction = "right";
      }

      this.setState(
        {
          active: index
        },
        () => {
          this.prepareTransition(direction);
        }
      );
    }
  }

  prepareTransition(direction) {
    let newOffset;
    let newItems = this.state.items;

    if (direction === "left") {
      newItems.push(this.state.active);
      newOffset = 0;
    } else {
      newItems.unshift(this.state.active);
      newOffset = "-100%";
    }
    this.setState(
      {
        items: newItems,
        offset: newOffset
      },
      () => {
        this.setTimeout = window.setTimeout(() => {
          this.startTransition(direction);
        }, 20);
      }
    );
  }

  startTransition(direction) {
    this.setState({ inTransition: true }, () => {
      clearTimeout(this.setTimeout);
      this.transition(direction);
    });
  }

  transition(direction) {
    const newOffset = direction === "left" ? "-100%" : 0;

    this.transitionEndHandler = () => this.finishTransition(direction);
    this.refs.inner.addEventListener(
      "transitionend",
      this.transitionEndHandler
    );

    this.setState({
      offset: newOffset
    });
  }

  finishTransition(direction) {
    this.refs.inner.removeEventListener(
      "transitionend",
      this.transitionEndHandler
    );
    delete this.transitionEndHandler;

    this.setState({ inTransition: false }, () =>
      this.afterTransition(direction)
    );
  }

  afterTransition(direction) {
    const items = this.state.items.slice();

    const newItems =
      direction === "left" ? items.slice(1) : items.slice(0, items.length - 1);

    this.setState({
      items: newItems,
      offset: 0
    });

    this.timeout = false;
  }

  render() {
    return (
      <section className="VideoCarousel">
        <div
          className={
            this.state.inTransition
              ? "VideoCarousel__inner VideoCarousel__inner_in-transition"
              : "VideoCarousel__inner"
          }
          style={{
            marginLeft: this.state.offset,
            width: 100 * this.state.items.length + "%"
          }}
          ref="inner"
        >
          {this.renderVideo()}
        </div>
        <div className="VideoCarousel__controls">
          <div className="VideoCarousel__controls__wrap">
            {this.renderControls()}
          </div>
        </div>
      </section>
    );
  }
}
