import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import "./dropdown.css";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.onNavItemHover = this.onNavItemHover.bind(this);
    this.onNavItemLeave = this.onNavItemLeave.bind(this);
    this.onLinkButtonClick = this.onLinkButtonClick.bind(this);
  }

  defineClassName() {
    let name = "Dropdown";

    if (this.props.size) {
      name += ` Dropdown_size_${this.props.size}`;
    }

    if (this.state.open) {
      name += ` Dropdown_state_open`;
    }
    return name;
  }

  onNavItemHover() {
    if (window.innerWidth > 767) {
      this.setState({ open: true });
    }
  }

  onNavItemLeave() {
    if (window.innerWidth > 767) {
      this.setState({ open: false });
    }
  }

  onSubmenuClick(e) {
    if (e.target.tagName === "A" || e.target.tagName === "SPAN") {
      this.setState({ open: false });
    }
  }

  onLinkButtonClick() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Link
          to={this.props.path}
          onMouseOver={this.onNavItemHover}
          onMouseLeave={this.onNavItemLeave}
        >
          {this.props.navItem}
        </Link>

        <Button
          shape="pseudo"
          color="trans"
          arrow="right"
          onClick={this.onLinkButtonClick}
        />

        <div
          onMouseOver={this.onNavItemHover}
          onMouseLeave={this.onNavItemLeave}
          className={this.defineClassName()}
          onClick={e => {
            this.onSubmenuClick(e);
          }}
        >
          {this.props.submenu}
          <Button
            shape="pseudo"
            color="trans"
            arrow="left"
            onClick={this.onLinkButtonClick}
          />
        </div>
      </React.Fragment>
    );
  }
}
