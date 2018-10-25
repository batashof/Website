import React, { Component } from "react";
import { Slider, FeatureTile } from "..";

import "./main-tile.css";

export default class MainTile extends Component {
  renderCaseStudies() {
    return this.props.caseStudies.map(item => (
      <FeatureTile
        key={item.title}
        titlePosition="top-right"
        textPosition="center"
        curtain={item.bannerFilter}
        bgPicture="/img/discussion.jpg"
        height="450"
        logo={item.logo}
        textShadow={true}
        title="CASE STUDY"
      >
        {item.feature}
      </FeatureTile>
    ));
  }
  render() {
    return (
      <div className="MainTile-wrap">
        <ul className="MainTile">
          <li className="MainTile__item">
            <FeatureTile
              hoverEffect="slide-top"
              titlePosition="top-right"
              textPosition="top-right-bellow-title"
              curtain="blue"
              bgPicture="/img/coin.jpg"
              title="Our mission"
              href="/our-mission"
            >
              Our mission is to become the most respected nearshore software
              delivery partner in Europe, championing quality over revenue,
              recruiting and retaining the 'best of the best', and by doing
              software development...properly.
            </FeatureTile>
          </li>
          <li className="MainTile__item">
            <Slider controlsPosition="bottom" sliderTimeout={6}>
              {this.renderCaseStudies()}
            </Slider>
          </li>
          <li className="MainTile__item">
            <Slider sliderTimeout={8}>
              <FeatureTile
                titlePosition="bottom-left"
                textPosition="top-right"
                bgPicture="/img/discussion.jpg"
                height="450"
                img="crowd"
                title="Team Augmentation"
                curtain="aqua"
                href="/team-augmentation"
              >
                Highly skilled resources augmented into your existing in-house
                team to help increase the velocity, frequency and quality of
                your software delivery.
              </FeatureTile>
              <FeatureTile
                titlePosition="bottom-left"
                textPosition="top-right"
                curtain="red"
                bgPicture="/img/discussion.jpg"
                height="450"
                img="the-people"
                title="Dedicated Teams"
                href="/dedicated-teams"
              >
                Create a dedicated delivery capability consisting of
                cross-functional resources to become an extension of your
                in-house delivery teams.
              </FeatureTile>
              <FeatureTile
                titlePosition="bottom-left"
                textPosition="top-right"
                curtain="violet"
                bgPicture="/img/discussion.jpg"
                height="450"
                img="squares"
                title="Product Development"
                href="/product-development"
              >
                Providing expert engineers to help design, develop and deliver
                quality software products that your customers love using.
              </FeatureTile>
              <FeatureTile
                titlePosition="bottom-left"
                textPosition="top-right"
                curtain="green"
                bgPicture="/img/discussion.jpg"
                height="450"
                img="mac"
                title="Project Based"
                href="/project-based"
              >
                Fast access to a highly performant delivery team to aid you in a
                mission-critical software delivery to your stakeholders or
                customers.
              </FeatureTile>
            </Slider>
          </li>
          <li className="MainTile__item">
            <FeatureTile
              hoverEffect="fixed"
              titlePosition="top-left"
              textPosition="top-left-bellow-title"
              curtain="crimson"
              bgPicture="/img/team.jpg"
              title="Our people"
              href="/our-people"
            >
              Discover the reasons why your peers choose us, learn more about
              the Godel family; our values and our unique culture.
            </FeatureTile>
          </li>
        </ul>
      </div>
    );
  }
}
