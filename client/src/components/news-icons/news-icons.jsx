import React, { Component } from "react";
import "./news-icons.css";
import ReactSVG from "react-svg";
import { NewsSocialBlock } from "../../components";
import { defineUrl } from "../../services/define-url.js";
import { parseDate } from "../../services/parse-date.js";

export default class NewsIcons extends Component {
  render() {
    const date = parseDate(this.props.date.slice(0, 10));

    return (
      <div className="NewsIcons">
        <div className="NewsIcons__date">
          <span className="NewsIcons__date-day">{date.day}</span>
          <span className="NewsIcons__date-month">{date.month}</span>
        </div>

        <div className="NewsIcons__views">
          <ReactSVG path="/icons/eye.svg" />
          <span>{this.props.views}</span>
        </div>
        <NewsSocialBlock
          url={"http://www.godeltech.com/news/" + defineUrl(this.props.news)}
        />
      </div>
    );
  }
}
