import React, { Component } from "react";
import "./jobs-filter.css";
import queryString from "querystring";

export default class JobsFilter extends Component {
  constructor(props) {
    super(props);
    const url = queryString.parse(global.location.search);
    this.locations = [
      { value: "all cities", id: "" },
      { value: "Manchester", id: "manchester" },
      { value: "London", id: "london" },
      { value: "Minsk", id: "minsk" },
      { value: "Brest", id: "brest" },
      { value: "Grodno", id: "grodno" }
    ];
    this.divisions = [
      { value: "all", id: "" },
      { value: "JavaScript", id: "js" },
      { value: "Java", id: "java" },
      { value: ".NET", id: "net" },
      { value: "PHP", id: "php" },
      { value: "QA", id: "qa" },
      { value: "Automation QA", id: "auto-qa" },
      { value: "PM", id: "pm" },
      { value: "BA", id: "ba" },
      { value: "BI", id: "bi" },
      { value: "DevOps", id: "devops" },
      { value: "Administration", id: "administration" }
    ];

    let activeLocation = "all cities";
    let activeDivision = "all";

    if (url.location) {
      this.locations.forEach(item => {
        if (item.id === url.location) {
          activeLocation = item.value;
        }
      });
    }
    if (url.division) {
      this.divisions.forEach(item => {
        if (item.id === url.division) {
          activeDivision = item.value;
        }
      });
    }
    this.state = {
      activeParameter: "none",
      location: activeLocation,
      division: activeDivision,
      locationId: url.location,
      divisionId: url.division,
      leftPosition: 0
    };
  }

  setActiveParameter(e) {
    if (e.target.tagName === "SPAN") {
      let changingParameter = e.target.id;

      if (this.state.activeParameter === changingParameter) {
        this.setState({
          activeParameter: "none"
        });
      } else {
        let value =
          e.target.getBoundingClientRect().left -
          e.target.parentNode.getBoundingClientRect().left -
          13 +
          "px";
        this.setState({
          activeParameter: changingParameter,
          leftPosition: value
        });
      }
    }
  }
  setValueOfParameter(e) {
    if (e.target.tagName === "LI") {
      let changingParameter =
        e.target.parentNode.previousSibling.previousSibling.id;
      if (changingParameter === "location") {
        this.setState(
          {
            location: e.target.innerText,
            locationId: e.target.id,
            activeParameter: "none"
          },
          () =>
            this.props.onStateChange(
              this.state.locationId,
              this.state.divisionId
            )
        );
      } else {
        this.setState(
          {
            division: e.target.innerText,
            divisionId: e.target.id,
            activeParameter: "none"
          },
          () =>
            this.props.onStateChange(
              this.state.locationId,
              this.state.divisionId
            )
        );
      }
    }
  }

  JobsFilterDropdown(arr) {
    return (
      <ul
        className="JobsFilter__dropdown"
        style={{ left: this.state.leftPosition }}
      >
        {arr.map(item => (
          <li
            key={item.value}
            className="JobsFilter__item"
            id={item.id}
            onClick={e => this.setValueOfParameter(e)}
          >
            {item.value}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="JobsFilter">
        <span>Look at</span>{" "}
        <span
          className={
            this.state.activeParameter === "division"
              ? "JobsFilter__parameters JobsFilter__parameters_active"
              : "JobsFilter__parameters"
          }
          id="division"
          onClick={e => this.setActiveParameter(e)}
        >
          {this.state.division}
        </span>{" "}
        {this.JobsFilterDropdown(this.divisions)}
        <span>vacancies in</span>{" "}
        <span
          className={
            this.state.activeParameter === "location"
              ? "JobsFilter__parameters JobsFilter__parameters_active"
              : "JobsFilter__parameters"
          }
          id="location"
          onClick={e => this.setActiveParameter(e)}
        >
          {this.state.location}
        </span>{" "}
        {this.JobsFilterDropdown(this.locations)}
      </div>
    );
  }
}
