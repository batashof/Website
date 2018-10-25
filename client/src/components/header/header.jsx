import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import List from "../list/list";
import Dropdown from "../dropdown/dropdown";
import IconLink from "../icon-link/icon-link";
import ServiceLink from "../service-link/service-link";
import debounce from "../../services/debounce";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavExpand: false
    };

    this._onResize = debounce(() => {
      if (window.innerWidth > 767) {
        this.setState({
          isNavExpand: false
        });
      }
    }, 300);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (window.innerWidth > 767) return;
    if (
      e.target.tagName === "A" ||
      e.currentTarget.tagName === "BUTTON" ||
      e.target.tagName === "BUTTON" ||
      e.target.tagName === "SPAN"
    ) {
      this.setState(prevState => ({
        isNavExpand: !prevState.isNavExpand
      }));
    }
  }

  defineMenuStyle() {
    return window.innerWidth < 767 && this.state.isNavExpand
      ? "vertical"
      : "horisontal";
  }

  componentDidMount() {
    global.addEventListener("resize", this._onResize);
  }

  componentWillUnmount() {
    global.removeEventListener("resize", this._onResize);
  }

  render() {
    return (
      <header className="Header">
        <div className="Header__wrap">
          <Logo text={true} altText="Godel Technologies" />
          <div className="contacts">
            <a
              href={"tel:" + this.props.tel}
              className="contacts__link contacts__link_role_phone"
            >
              +44 161 219 8100
            </a>
            <a
              href={"mailto:" + this.props.mail}
              className="contacts__link contacts__link_role_mail"
            >
              {this.props.mail}
            </a>
          </div>
          <nav
            className={
              this.state.isNavExpand ? "main-nav main-nav_expand" : "main-nav"
            }
          >
            <button
              className={
                this.state.isNavExpand
                  ? "main-nav__btn main-nav__btn_on"
                  : "main-nav__btn"
              }
              onClick={e => this.handleClick(e)}
            >
              <span />
            </button>
            <List
              layout={this.defineMenuStyle()}
              onClick={e => this.handleClick(e)}
            >
              <Link to="/">Home</Link>
              <Dropdown
                size="s"
                submenu={
                  <List layout="vertical-with-bullets">
                    <Link to="/our-people">Our People &amp; Culture</Link>
                    <Link to="/our-mission">Our Mission</Link>
                    <Link to="/team-skills">Team Skills</Link>
                    <Link to="/our-delivery-process">Our delivery process</Link>
                    <Link to="/our-leaders">Our leaders</Link>
                  </List>
                }
                navItem="About Us"
                path="/about-us"
              />
              <Dropdown
                size="l"
                open={this.state.open ? true : false}
                submenu={[
                  <List key="1" layout="vertical">
                    <ServiceLink name="team-augmentation" />
                    <ServiceLink name="dedicated-teams" />
                    <ServiceLink name="product-development" />
                    <ServiceLink name="project-based" />
                  </List>,
                  <List key="2" layout="vertical-with-bullets">
                    <Link to="/software-development">Software development</Link>
                    <Link to="/qa-automation">QA / Automation</Link>
                    <Link to="/cloud/">Cloud</Link>
                    <Link to="/business-intelligence">
                      Business intelligence
                    </Link>
                    <Link to="/agile-consulting">Agile consulting</Link>
                    <Link to="/continuous-delivery">Devops</Link>
                    <Link to="/digitaltransformation">
                      Digital transformation
                    </Link>
                  </List>
                ]}
                navItem="Our services"
                path="/our-services"
              />
              <Dropdown
                size="m"
                submenu={
                  <List layout="vertical-with-bullets-and-icons">
                    <IconLink name="E-commerce" />
                    <IconLink name="ISV" />
                    <IconLink name="Finance" />
                    <IconLink name="Manufacturing" />
                    <IconLink name="Energy" />
                    <IconLink name="Professional services" />
                    <IconLink name="Automotive" />
                    <IconLink name="Retail" />
                    <IconLink name="Travel" />
                  </List>
                }
                navItem="Industries"
                path="/industries"
              />
              <Link to="/news">News &amp; Events</Link>
              <Dropdown
                size="xl"
                submenu={[
                  <List key="1" layout="vertical-with-bullets">
                    <Link to="/jobs?location=manchester">Manchester</Link>
                    <Link to="/jobs?location=london">London</Link>
                    <Link to="/jobs?location=minsk">Minsk</Link>
                    <Link to="/jobs?location=grodno">Grodno</Link>
                    <Link to="/jobs?location=brest">Brest</Link>
                  </List>,
                  <List key="2" layout="vertical-with-bullets">
                    <Link to="/jobs?division=java">Java</Link>
                    <Link to="/jobs?division=net">.NET</Link>
                    <Link to="/jobs?division=php/">PHP</Link>
                    <Link to="/jobs?division=javascript/">JavaScript</Link>
                    <Link to="/jobs?division=qa/">QA</Link>
                    <Link to="/jobs?division=aqa/">AQA</Link>
                    <Link to="/jobs?division=pm">PM</Link>
                    <Link to="/jobs?division=ba">BA</Link>
                    <Link to="/jobs?division=bi">BI</Link>
                    <Link to="/jobs?division=devops">DevOps</Link>
                    <Link to="/jobs?division=administration">
                      Administration
                    </Link>
                  </List>
                ]}
                navItem="Careers"
                path="/careers"
              />
              <Link to="/get-in-touch">Get in touch</Link>
              <button className="main-nav__close-btn" />
            </List>
          </nav>
        </div>
      </header>
    );
  }
}

Header.defaultProps = { tel: "+441612198100", mail: "hello@godeltech.com" };
