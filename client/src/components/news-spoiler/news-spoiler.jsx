import React, { Component } from "react";
import Button from "../button/button.jsx";

import "./news-spoiler.css";

export default class NewsSpoiler extends Component {
  render() {
    return (
      <div className="NewsSpoiler">
        <img
          className="NewsSpoiler__img"
          src={this.props.src}
          alt={this.props.title}
        />
        <h4 className="NewsSpoiler__title">{this.props.title}</h4>
        <p className="NewsSpoiler__text">{this.props.children}</p>
        <Button
          color="trans"
          shape="pseudo"
          arrow="right"
          href={this.props.href}
        >
          View article
        </Button>
      </div>
    );
  }
}
NewsSpoiler.defaultProps = {
  href: "#"
};
