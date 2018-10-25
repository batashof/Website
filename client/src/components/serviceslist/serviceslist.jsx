import React, { Component } from "react";
import "./services-list.css";

class ServicesList extends Component {
  existLegs() {
    return "ServicesList__legs " + (this.props.legs ? "" : "LegsOff");
  }
  render() {
    const list = this.props.children.map((child, index) => (
      <li key={"ServicesList__item " + index} className="ServicesList__item">
        {child}
      </li>
    ));
    return (
      <div className="ServicesList">
        <ul className="ServicesList__list">{list}</ul>
        <div className={this.existLegs()}>
          <div className="ServicesList__legs-left" />
          <div className="ServicesList__legs-left-center" />
          <div className="ServicesList__legs-right-center" />
          <div className="ServicesList__legs-right" />
        </div>
      </div>
    );
  }
}

ServicesList.defaultProps = {
  legs: false
}

export default ServicesList;
