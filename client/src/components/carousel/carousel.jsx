import React, { Component } from "react";
import "./carousel.css";
import Button from "../button/button";
import debounce from "../../services/debounce";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this._onFocus = () => {
      if (this.props.autoPlay) {
        this.autoplay = true;
        this.toggleAutoplay();
      }
    };

    this._onBlur = () => {
      this.autoplay = false;
      this.toggleAutoplay();
    };

    this._onResize = debounce(() => {
      this.setState({
        size: this.defineCarouselSize()
      });
    }, 300);

    this.state = {
      size: this.defineCarouselSize(),
      offset: "",
      items: [...Array(this.defineCarouselSize()).keys()],
      inTransition: false
    };

    this.autoplay = this.props.autoPlay ? true : false;
  }

  defineCarouselSize() {
    let size = this.props.sizeL;

    if (window.innerWidth < 980 && this.props.sizeM) {
      size = this.props.sizeM;
    }

    if (window.innerWidth < 767 && this.props.sizeS) {
      size = this.props.sizeS;
    }

    if (window.innerWidth < 480 && this.props.sizeXs) {
      size = this.props.sizeXs;
    }

    return size;
  }

  componentDidMount() {
    global.addEventListener("focus", this._onFocus, false);
    global.addEventListener("blur", this._onBlur, false);
    global.addEventListener("resize", this._onResize);
    this.toggleAutoplay();
  }

  componentWillUnmount() {
    global.removeEventListener("focus", this._onFocus, false);
    global.removeEventListener("blur", this._onBlur, false);
    global.removeEventListener("resize", this._onResize);
    clearInterval(this.timer);
  }

  defineClassName() {
    let className = "Carousel";
    className += this.props.controls
      ? " Carousel_controls_" + this.props.controls
      : "";
    return className;
  }

  defineSlideWidth() {
    const slide = this.refs.inner.firstChild;
    return slide.clientWidth;
  }

  renderSlides() {
    let slides = [];

    for (let i = 0; i < this.state.items.length; i++) {
      slides.push(
        <li
          className="Carousel__slide"
          key={i}
          style={{
            width: 100 / this.state.size + "%"
          }}
        >
          {this.props.children[this.state.items[i]]}
        </li>
      );
    }

    return slides;
  }

  toggleAutoplay() {
    clearInterval(this.timer);
    if (this.autoplay) {
      this.timer = setInterval(() => {
        this.timeout = true;
        this.prepareTransition("right");
      }, this.props.autoPlay);
    }
  }

  handleClick(e, direction) {
    if (this.timeout) {
      return;
    } else {
      this.timeout = true;
      this.prepareTransition(direction);
    }
  }

  prepareTransition(direction) {
    const items = this.state.items;
    let nextIndex;
    if (direction === "left") {
      nextIndex = items[0] - 1;
      if (nextIndex < 0) {
        nextIndex = this.props.children.length - 1;
      }
      items.unshift(nextIndex);
    } else {
      nextIndex = items[items.length - 1] + 1;
      if (nextIndex >= this.props.children.length) {
        nextIndex = 0;
      }
      items.push(nextIndex);
    }
    let newOffset = direction === "left" ? -this.defineSlideWidth() : 0;
    this.setState(
      {
        items: items,
        offset: newOffset
      },
      () => {
        this.setTimeout = window.setTimeout(() => {
          this.onContentChange(nextIndex);
          this.startTransition(direction);
        }, 10);
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
    const newOffset = direction === "left" ? 0 : -this.defineSlideWidth();
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
      direction === "left" ? items.slice(0, items.length - 1) : items.slice(1);

    this.setState({
      items: newItems,
      offset: 0
    });
    this.timeout = false;
    this.autoplay = this.props.autoPlay ? true : false;
    this.toggleAutoplay();
  }

  onContentChange(nextIndex) {
    if (this.props.extention) {
      let id = this.props.children[nextIndex].props.id;
      return this.props.onPageChange(id);
    }
  }

  renderButtons() {
    if (this.props.controls) {
      return (
        <React.Fragment>
          <div className="Carousel__btn Carousel__btn_direction_left">
            <Button
              color="trans"
              shape="pseudo"
              arrow="left"
              onClick={e => this.handleClick(e, "left")}
            />
          </div>
          <div className="Carousel__btn Carousel__btn_direction_right">
            <Button
              color="trans"
              shape="pseudo"
              arrow="right"
              onClick={e => this.handleClick(e, "right")}
            />
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div className={this.defineClassName()}>
        <div className="Carousel__slick">
          <ul
            className={
              this.state.inTransition
                ? "Carousel__inner Carousel__inner_in-transition"
                : "Carousel__inner"
            }
            style={{
              marginLeft: this.state.offset,
              width: 100 / this.state.size * this.state.items.length + "%"
            }}
            ref="inner"
          >
            {this.renderSlides()}
          </ul>
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}
