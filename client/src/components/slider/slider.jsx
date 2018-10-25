import React, { Component } from "react";
import "./slider.css";
import debounce from "../../services/debounce";

class Slider extends Component {
  constructor(props) {
    super(props);
    this._onResize = debounce(() => this.setOffset(), 300);
    this.state = {
      count: 1,
      offset: 1,
      length: 0,
      directionRight: true
    };
    this.setTimeoutOn = true;
  }

  defineInitialState() {
    const Slider = this.divSlider;
    if (Slider) {
      let offset = Slider.offsetWidth;
      this.setState({
        offset: offset,
        length: this.props.children.length
      });
    }
  }

  defineOffset() {
    const Slider = this.divSlider;

    if (Slider) {
      let offset = Slider.offsetWidth;
      return offset;
    }
  }

  setOffset() {
    this.setState({
      offset: this.defineOffset()
    });
  }

  getChildrenList() {
    return this.props.children.map((child, index) => (
      <li
        style={{ width: this.state.offset + "px" }}
        key={"Slider__item" + index}
        id={"Slider__item" + index}
        className="Slider__item"
      >
        {child}
      </li>
    ));
  }

  getControlList() {
    if (this.props.children.length < 2) {
      this.setTimeoutOn = false;
      return;
    }
    return this.props.children.map((child, index) => (
      <li
        key={"Slider__controls-item" + index}
        id={"Slider__controls-item" + index}
        className={
          index === this.state.count - 1
            ? "Slider__controls-item Slider__controls-item_active"
            : "Slider__controls-item"
        }
      />
    ));
  }

  moveSlide() {
    if (this.setTimeoutOn) {
      this.setState({
        count: this.state.count + (this.state.directionRight ? 1 : -1)
      });
      if (this.state.count === 1 || this.state.count > this.state.length - 1) {
        this.setState({
          directionRight: !this.state.directionRight
        });
      }
    }
  }
  componentDidMount() {
    this.defineInitialState();
    global.addEventListener("resize", this._onResize);
    this.timerId = setInterval(
      this.moveSlide.bind(this),
      this.props.sliderTimeout * 1000
    );
  }

  componentWillUnmount() {
    global.removeEventListener("resize", this._onResize);

    clearTimeout(this.timerId);
  }

  controlMove = function(e) {
    let val = e.target.id.replace(/\D/g, "");
    if (e.target.tagName === "LI") {
      this.setState({
        count: +val + 1
      });
      this.setTimeoutOn = false;
    }
  };
  defineClass() {
    return [
      "Slider",
      "Slider_controlsPosition_" + this.props.controlsPosition
    ].join(" ");
  }

  render() {
    return (
      <div
        className={this.defineClass()}
        ref={slider => {
          this.divSlider = slider;
        }}
      >
        <ul
          style={{ left: (this.state.count - 1) * -this.state.offset + "px" }}
          className="Slider__list"
        >
          {this.getChildrenList()}
        </ul>

        <ul className="Slider__controls" onClick={e => this.controlMove(e)}>
          {this.getControlList()}
        </ul>
      </div>
    );
  }
}
Slider.defaultProps = {
  controlsPosition: "top",
  sliderTimeout: 2
};
export default Slider;
