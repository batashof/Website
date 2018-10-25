import React, { Component } from "react";
import Layout from "../layout/layout.jsx";
import "./section.css";

export default class Section extends Component {
  defineClass() {
    return [
      "Section",
      "Section_" + this.props.name,
      "Section_bg-color_" + this.props.bgColor,
      "Section_" + (this.props.ears ? "with-ears" : ""),
      "Section_blur_" + (this.props.ears && this.props.blur),
      "Section_border_" + this.props.border,
      "Section_bg-picture_" + this.props.bgPicture
    ].join(" ");
  }
  defineName() {
    return "Section_" + this.props.name
  }

  render() {
    return (
      <div className={this.defineClass()}>
        <Layout
          width={this.props.width}
          title={this.props.title}
          name= "Section"
          text={this.props.text}
          button={this.props.button}
        >
          {this.props.children}
        </Layout>
      </div>
    );
  }
}

Section.defaultProps = {
  width: "full",
  name: "universal",
  ears: false,
  blur: "top"
};
