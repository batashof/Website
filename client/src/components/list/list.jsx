import React, { Component } from "react";
import "./list.css";

export default class List extends Component {
  defineClassName() {
    return this.props.layout ? "List List_layout_" + this.props.layout : "List";
  }
  render() {
    return (
      <ul className={this.defineClassName()} onClick={this.props.onClick}>
        {this.props.children.map((child, index) => (
          <li key={index} className="List__item">
            {child}
          </li>
        ))}
      </ul>
    );
  }
}
