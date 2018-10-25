import React, { Component } from "react";
import { Button } from "../../components";
import "./news-search.css";

export default class NewsSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchValue);
  }

  render() {
    return (
      <form className="NewsSearch" onSubmit={e => this.onSubmit(e)}>
        <input
          className="NewsSearch__input"
          type="search"
          placeholder="Search topic"
          name="search"
          value={this.state.searchValue}
          onChange={this.changeHandler}
        />
        <Button shape="square" color="green" hover="blue" arrow="right" />
      </form>
    );
  }
}
