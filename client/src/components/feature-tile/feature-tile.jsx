import React, { Component } from "react";
import "./feature-tile.css";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

class FeatureTile extends Component {
  defineClass() {
    let exceptions = [
      "children",
      "title",
      "href",
      "logo",
      "bgPicture",
      "textShadow",
      "typeLink"
    ];
    let arr = ["FeatureTile"];

    Object.keys(this.props)
      .filter(name => exceptions.indexOf(name) !== true)
      .map(name => {
        return arr.push("FeatureTile_" + name + "_" + this.props[name]);
      });
    if (this.props.logo) {
      arr.push("FeatureTile_logo");
    }
    if (this.props.textShadow) {
      arr.push("FeatureTile_text-shadow");
    }
    return arr.join(" ");
  }

  render() {
    return (
      <Link to={this.props.href} className={this.defineClass()}>
        <span
          className="FeatureTile__filter"
          style={{
            backgroundImage: "url('" + this.props.bgPicture + "')"
          }}
        />
        <span className="FeatureTile__content">
          <span className="FeatureTile__title">{this.props.title}</span>
          <span className="FeatureTile__img" />
          <ReactSVG path={this.props.logo} className="FeatureTile__logo" />
          <span className="FeatureTile__text">{this.props.children}</span>
        </span>
      </Link>
    );
  }
}

FeatureTile.defaultProps = {
  height: "260",
  bgPicture: "/img/discussion.jpg",
  titlePosition: "bottom-right",
  href: "/",
  img: "none",
  curtain: "crimson",
  hoverEffect: "none",
  textShadow: false,
  logo: "/icons/target"
};

export default FeatureTile;
