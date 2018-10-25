import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import arrowRight from "./button-icons/arrow-right";
import arrowLeft from "./button-icons/arrow-left";
import "./button.css";

export default class Button extends Component {
  buildClass() {
    return [
      "Button",
      "Button_color_" + this.props.color,
      "Button_hover_" + this.props.hover,
      "Button_shape_" + this.props.shape,
      "Button_bg_" + this.props.bg
    ].join(" ");
  }

  defineIcon() {
    switch (this.props.icon) {
      case "play":
        return <ReactSVG path="/icons/play.svg" />;

      default:
        return;
    }
  }

  defineArrow() {
    switch (this.props.arrow) {
      case "right":
        return arrowRight;
      case "left":
        return arrowLeft;
      case "none":
      default:
        return;
    }
  }

  iconBefore() {
    if (this.props.pos === "beforeText") return this.defineIcon();
  }

  iconAfter() {
    if (this.props.pos === "afterText") return this.defineIcon();
  }

  renderContent() {
    return (
      <React.Fragment>
        {this.iconBefore()}
        {this.props.children}
        {this.iconAfter()}
        {this.defineArrow()}
      </React.Fragment>
    );
  }

  renderAsLink() {
    return (
      <Link className={this.buildClass()} to={this.props.href}>
        {this.renderContent()}
      </Link>
    );
  }

  renderAsButton() {
    return (
      <button
        className={this.buildClass()}
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.renderContent()}
      </button>
    );
  }

  render() {
    return this.props.href ? this.renderAsLink() : this.renderAsButton();
  }
}

Button.defaultProps = {
  color: "green",
  shape: "rect",
  pos: "afterText",
  arrow: "right"
};
