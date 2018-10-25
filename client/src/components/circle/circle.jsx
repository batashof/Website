import React, { Component } from "react";
import "./circle.css";

class Circle extends Component {
  defineClass() {
    let propsList = this.props;
    return [
      "Circle",
      "Circle_color_" + propsList.color,
      "Circle_icon_" + propsList.icon,
      "Circle_size_" + propsList.size,
      "Circle_" + (propsList.active ? "active" : "")
    ].join(" ");
  }

  render() {
    return (
      <a href={this.props.href} className={this.defineClass()}>
        {this.props.children}
      </a>
    );
  }
}

Circle.defaultProps = {
  color: "green",
  size: "m",
  icon: "team-augmentation",
  active: false
};

export default Circle;
