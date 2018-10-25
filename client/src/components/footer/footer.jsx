import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { List, Locations, Certificates, SocialLinks } from "..";

export default class Footer extends Component {
  renderExtentions() {
    if (this.props.extended) {
      return (
        <React.Fragment>
          <Locations />
          <Certificates />
        </React.Fragment>
      );
    }
  }

  renderLink(url, text) {
    return (
      <Link className={"Footer__link Footer_link-color_white"} to={url}>
        {text}
      </Link>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderExtentions()}
        <footer className="Footer">
          <div className="Footer__wrap">
            <div className="Footer__section Footer_section-size_s">
              <h3 className="Footer__title">Social</h3>
              <SocialLinks color="aqua" />
            </div>

            <div className="Footer__section Footer_section-size_m">
              <h3 className="Footer__title">Sitemap</h3>

              <List layout="vertical">
                {this.renderLink("/", "Home")}
                {this.renderLink("/about-us/", "About Us")}
                {this.renderLink("/our-services/", "Our Services")}
                {this.renderLink("/news/", "News & Events")}
                {this.renderLink("/careers/", "Careers")}
                {this.renderLink("/get-in-touch/", "Get in touch")}
              </List>
            </div>

            <div className="Footer__section Footer_section-size_l">
              <h3 className="Footer__title">Careers</h3>
              <p>
                If you are interested in working <br />
                at Godel send us your CV <br />
                to &nbsp;
                <a
                  className="Footer__link Footer_link-color_green"
                  href="mailto:careers@godeltech.com"
                >
                  careers@godeltech.com
                </a>
                <br /> and we can talk.
              </p>
              <Link className="Footer__link" to="/privacy/">
                <h3 className="Footer__title Footer__link">Privacy</h3>
              </Link>
            </div>

            <div className="Footer__section Footer_section-size_xl">
              <h3 className="Footer__title">Contact</h3>

              <div className="Footer__section-wrap">
                <List layout="vertical">
                  <span>27th Floor</span>
                  <span>City Tower</span>
                  <span>Piccadilly Plaza</span>
                  <span>Manchester</span>
                  <span>M1 4BT</span>
                </List>
                <List layout="vertical">
                  <a
                    className="Footer__link Footer_link-color_white"
                    href="tel:+441612198100"
                  >
                    +44 161 219 8100
                  </a>
                  <a
                    className="Footer__link Footer_link-color_white"
                    href="tel:+442070998100"
                  >
                    +44 207 099 8100
                  </a>
                  <a
                    className="Footer__link Footer_link-color_white"
                    href="mailto:hello@godeltech.com"
                  >
                    hello@godeltech.com
                  </a>
                </List>
              </div>
              <div className="Footer__note">
                Company number: 4551774 Company VAT number: 817674207 <br />
                <br />
                website by &nbsp;
                <a
                  className="Footer__link Footer_link-color_white"
                  href="http://www.digitalnext.co.uk"
                >
                  www.digitalnext.co.uk
                </a>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
