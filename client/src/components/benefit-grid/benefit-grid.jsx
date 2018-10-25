import React, { Component } from "react";
import ReactSVG from "react-svg";
import "./benefit-grid.css";

export default class BenefitGrid extends Component {
  renderTile() {
    const gridArr = [
      { title: "RESPECTED FOR AGILE DELIVERY", icon: "cup" },
      { title: "CHALLENGING ASSIGNMENTS", icon: "challenge" },
      { title: "FUN ENVIRONMENT", icon: "smile" },
      { title: "20 DAYS HOLIDAY PER YEAR + DAY OFF ON BIRTHDAY", icon: "sun" },
      {
        title: "EXCITING CLIENTS WITH EXCITING MISSIONS!",
        icon: "exciting-mission"
      },
      { title: "STRONG TEAM CULTURE", icon: "target" },
      { title: "SPORTS AND SOCIAL ACTIVITIES", icon: "dumbbell" },
      { title: "UNIQUE WAYS OF WORKING", icon: "geolocation" },
      { title: "COMPETITIVE SALARIES", icon: "coins" },
      { title: "ACHIEVABLE METRICS", icon: "metrix" },
      { title: "PROFESSIONAL DEVELOPMENT", icon: "badge" },
      { title: "FLEXIBLE WORKING SCHEDULE", icon: "clock" },
      { title: "FINANCIALLY STABLE COMPANY", icon: "cards" }
    ];

    return gridArr.map(item => (
      <li className="BenefitGrid__item" key={item.icon}>
        <ReactSVG
          path={"/icons/" + item.icon + ".svg"}
          className="BenefitGrid__icon"
        />
        <span className="BenefitGrid__description">{item.title}</span>
      </li>
    ));
  }

  render() {
    return (
      <ul className="BenefitGrid">
        <li className="BenefitGrid__item_first">
          <h3 className="BenefitGrid__title">BENEFITS</h3>
          <p className="BenefitGrid__text">
            Having fun and delivering the very best service are the founding
            principles of Godel. We’re always on the lookout for talented and
            creative people who are willing to go above and beyond the call of
            duty for their team mates and our clients. Working for Godel comes
            with a range of benefits to help you to enjoy your work here,
            including:
          </p>
        </li>
        {this.renderTile()}
      </ul>
    );
  }
}
