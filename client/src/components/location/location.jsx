import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./location.css";
import LocationArrow from "./location-icon.jsx";

class Location extends Component {
  render() {
    const locationClass = this.props.address
      ? "Location Location__description"
      : "Location";
    return (
      <Link className={locationClass} to={this.props.href}>
        <h3 className="Location__title">{this.props.city}</h3>
        <address className="Location__address">
          <span className="Location__span">{this.props.address}</span>
          <span className="Location__span"> {this.props.index}</span>
          <span className="Location__span">{this.props.tel}</span>
        </address>
        <span className="Location__text">View location</span>

        {LocationArrow}
      </Link>
    );
  }
}

export default Location;
