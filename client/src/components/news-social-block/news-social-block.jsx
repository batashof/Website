import React, { Component } from "react";
import ReactSVG from "react-svg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from "react-share";

import "./news-social-block.css";

class NewsSocialBlock extends Component {
  facebookButton() {
    return (
      <FacebookShareButton url={this.props.url}>
        <ReactSVG path="/img/facebook-logo.svg" />
      </FacebookShareButton>
    );
  }
  twitterButton() {
    return (
      <TwitterShareButton url={this.props.url}>
        <ReactSVG path="/img/twitter-logo.svg" />
      </TwitterShareButton>
    );
  }

  linkedinButton() {
    return (
      <LinkedinShareButton url={this.props.url}>
        <ReactSVG path="/img/linkedin-logo.svg" />
      </LinkedinShareButton>
    );
  }

  render() {
    return (
      <ul className="NewsSocialBlock">
        <li className="NewsSocialBlock__item"> {this.facebookButton()} </li>
        <li className="NewsSocialBlock__item"> {this.twitterButton()} </li>
        <li className="NewsSocialBlock__item"> {this.linkedinButton()} </li>
      </ul>
    );
  }
}

export default NewsSocialBlock;
