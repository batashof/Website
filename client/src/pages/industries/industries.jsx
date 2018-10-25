import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Section,
  Carousel,
  Layout,
  Video,
  Logo,
  ServiceTile
} from "../../components";
import "./industries.css";

export default class Industries extends Component {
  render() {
    return (
      <main>
        <Layout
          width="full"
          title="DON’T TAKE OUR WORD FOR IT"
          name="industries-carousel"
        >
          <Carousel
            sizeL={5}
            sizeM={3}
            sizeS={2}
            sizeXs={1}
            controls="out"
            autoPlay={4000}
          >
            <ServiceTile division="isv" />
            <ServiceTile division="manufacturing" />
            <ServiceTile division="retail" />
            <ServiceTile division="e-commerce" />
            <ServiceTile division="travel" />
            <ServiceTile division="finance" />
            <ServiceTile division="energy" />
            <ServiceTile division="professional" />
            <ServiceTile division="automotive" />
          </Carousel>
        </Layout>
        <Layout width="full" name="industries-feature">
          <Logo text={false} alt="Godel Technologies" />
          <p className="industries-feature__text">
            We are engaging with some of the UK's leading household names and
            technology companies aiding them with industry disruptive business
            critical missions. If you are looking to establish a long-term
            relationship with a company that can provide exceptional talent and
            is committed to delivering quality software, look no further. You’ve
            read what we’ve had to say about ourselves, now it’s time to
            discover what our amazing clients have to say about working with
            Godel.
          </p>
        </Layout>
        <Layout
          width="half_position_left"
          name="industries-companies"
          title="COMPANIES WE'RE WORKING WITH"
          text={[
            "By offering a dynamic, flexible, no-nonsense and honest approach, we have become respected for a delivery model that sees us champion quality over revenue – this is why we've been chosen to assist industry leaders such as First:Utility, Think Money, LateRooms.com, AO.com, Trainline and many others with their projects."
          ]}
        >
          <ul className="industries-companies__list">
            <li className="industries-companies__item">
              <img
                src="/img/ao-logo_narrow.png"
                alt="AO.COM"
                className="industries-companies__img"
              />
            </li>
            <li className="industries-companies__item">
              <img
                src="/img/boden-logo.png"
                alt="Boden"
                className="industries-companies__img"
              />
            </li>
            <li className="industries-companies__item">
              <img
                src="/img/trainline.png"
                alt="Trainline"
                className="industries-companies__img"
              />
            </li>
            <li className="industries-companies__item">
              <img
                src="/img/first-utility-logo.png"
                alt="First utility"
                className="industries-companies__img"
              />
            </li>
            <li className="industries-companies__item">
              <img
                src="/img/feefo-logo.png"
                alt="Feefo"
                className="industries-companies__img"
              />
            </li>
            <li className="industries-companies__item">
              <img
                src="/img/dunnhumby-logo.png"
                alt="Dunnhumby"
                className="industries-companies__img"
              />
            </li>
          </ul>
        </Layout>
        <Video previewId="hPXZBYGTHR0" videoId="hPXZBYGTHR0" />

        <Layout
          width="half_position_left"
          name="industries-quote"
          text={[
            "One of the reasons why we chose to work with Godel is that they are all about high quality software."
          ]}
        >
          <a
            className="industries-quote__link"
            href="http://www.virginholidays.co.uk/"
          >
            Virgin Holidays
          </a>
          <span className="industries-quote__source">
            by Sue Dickinson, Head of Trading Systems
          </span>
        </Layout>
        <Layout name="industries-delivery-list" width="full">
          <div className="industries-delivery-list__inner">
            <h2 className="industries-delivery-list__title">
              HELPING ORGANISATIONS DELIVER SUCCESSFUL SOFTWARE PROJECTS, ON
              TIME AND ON BUDGET.
            </h2>
            <ul className="deliveryList deliveryList_links">
              <li className="deliveryList__item deliveryList__item_augmentation">
                <Link to="/team-augmentation" className="deliveryList__link">
                  <strong className="deliveryList__item-name">
                    TEAM AUGMENTATION
                  </strong>
                  <span className="deliveryList__item-text">
                    Our team augmentation offering is a tried and tested model
                    which allows clients to supplement their existing in-house
                    teams with skilled resources from Godel.
                  </span>
                  <Button color="trans" shape="pseudo" arrow="right" />
                </Link>
              </li>
              <li className="deliveryList__item deliveryList__item_dedicated">
                <Link to="/dedicated-teams" className="deliveryList__link">
                  <strong className="deliveryList__item-name">
                    DEDICATED TEAMS
                  </strong>
                  <span className="deliveryList__item-text">
                    Does your organisation have peaks and troughs in demand? Do
                    you find it difficult to attract and retain talent? Learn
                    why clients partner with Godel and adopt an extended or
                    dedicated team.
                  </span>
                  <Button color="trans" shape="pseudo" arrow="right" />
                </Link>
              </li>
              <li className="deliveryList__item deliveryList__item_product-development">
                <Link to="/product-development" className="deliveryList__link">
                  <strong className="deliveryList__item-name">
                    PRODUCT DEVELOPMENT
                  </strong>
                  <span className="deliveryList__item-text">
                    Looking for a partner to providing expert engineers to help
                    design, develop and delivery quality software products that
                    your customers love using?
                  </span>
                  <Button color="trans" shape="pseudo" arrow="right" />
                </Link>
              </li>
              <li className="deliveryList__item deliveryList__item_project-based">
                <Link to="/project-based" className="deliveryList__link">
                  <strong className="deliveryList__item-name">
                    PROJECT OUTSOURCE
                  </strong>
                  <span className="deliveryList__item-text">
                    If you have a project that you would like delivering by a
                    trusted partner with a track record for delivering
                    fit-for-purpose software on time and on budget our Project
                    based IT outsourcing is right for you.
                  </span>
                  <Button color="trans" shape="pseudo" arrow="right" />
                </Link>
              </li>
            </ul>
          </div>
          <Button
            color="green"
            shape="rect"
            arrow="right"
            href="/our-delivery-process/"
          >
            Read about our delivery process
          </Button>
        </Layout>
        <Section width="full">
          <ul className="linkTiles">
            <li className="linkTiles__tile linkTiles__tile_mission">
              <Button
                color="trans"
                shape="pseudo"
                arrow="right"
                href="/our-mission/"
              >
                Our mission
              </Button>
            </li>
            <li className="linkTiles__tile linkTiles__tile_people">
              <Button
                color="trans"
                shape="pseudo"
                arrow="right"
                href="/our-people/"
              >
                Our People and culture
              </Button>
            </li>
          </ul>
        </Section>
      </main>
    );
  }
}
