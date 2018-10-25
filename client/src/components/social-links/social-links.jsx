import React, { Component } from "react";
import ReactSVG from "react-svg";
import "./social-links.css";

class SocialLinks extends Component {
  defineClass() {
    let className = "SocialLinks";
    if (this.props.color) {
      className += ` SocialLinks_color_${this.props.color}`;
    }
    return className;
  }
  render() {
    return (
      <ul className={this.defineClass()}>
        <li className="SocialLinks__item">
          <a
            href="https://www.facebook.com/godeltech"
            className="SocialLinks__link"
          >
            <ReactSVG
              path="/img/facebook-logo.svg"
              className="SocialLinks__icon"
            />
          </a>
        </li>
        <li className="SocialLinks__item">
          <a href="https://twitter.com/godeltech" className="SocialLinks__link">
            <ReactSVG
              path="/img/twitter-logo.svg"
              className="SocialLinks__icon"
            />
          </a>
        </li>
        <li className="SocialLinks__item">
          <a
            href="https://www.linkedin.com/company/godel-technologies-europe"
            className="SocialLinks__link"
          >
            <ReactSVG
              path="/img/linkedin-logo.svg"
              className="SocialLinks__icon"
            />
          </a>
        </li>
      </ul>
    );
  }
}

SocialLinks.defaultProps = {
  color: "white"
};

export default SocialLinks;
