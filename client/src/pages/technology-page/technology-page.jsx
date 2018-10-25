import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  ServiceTile,
  List,
  Button,
  TechnologiesList,
  Section,
  CaseStudySpoiler,
  Loading
} from "../../components";
import "./technology-page.css";

export default class TechnologyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technology: {},
      companies: [],
      technologyList: [],
      loadingTechnology: true,
      loadingCompanies: true,
      loadingTechnologyList: true
    };
    const { id } = this.props.match.params;
    this.fetchTechnology(id);
  }

  fetchTechnology(id) {
    this.fetchTechnologyList(id);
    this.fetchCompanies(id);
    fetch(`/api/software-development/${id}`).then(res => {
      if (res.status !== 200) {
        return this.setState({
          error: true
        });
      }
      res.json().then(result =>
        this.setState({
          technology: result.technology,
          loadingTechnology: false
        })
      );
    });
  }

  fetchTechnologyList(id) {
    fetch("/api/software-development").then(res => {
      if (res.status !== 200) {
        return this.setState({
          error: true
        });
      }
      res.json().then(technologies => {
        let res = technologies.technology.filter(
          item => item.tag && item.tag !== id
        );
        this.setState({
          technologyList: res,
          loadingTechnologyList: false
        });
      });
    });
  }

  fetchCompanies(id) {
    fetch(`/api/case-studies?technology=${id}`).then(res => {
      if (res.status !== 200) {
        return this.setState({
          error: true
        });
      }
      res.json().then(technology =>
        this.setState({
          companies: technology["case-studies"],
          loadingCompanies: false
        })
      );
    });
  }

  defineSpoilerList() {
    let bgColor = "dark-blue";
    const companies = this.state.companies;
    if (this.state.companies) {
      return companies.map((item, index) => {
        let videoID = "";

        bgColor = bgColor === "dark-blue" ? "turquoise" : "dark-blue";
        if (item.video) {
          videoID = item.video.videoID;
        }

        return (
          <CaseStudySpoiler
            key={item.title + index}
            title={item.title}
            services={item.engagementDetails.services}
            bg={bgColor}
            technologies={item.engagementDetails.technologies}
            model={item.engagementDetails.model}
            duration={item.engagementDetails.duration}
            img={item.logo}
            videoId={videoID}
          />
        );
      });
    }
  }

  defineServiceTile() {
    return this.state.technologyList.map(item => {
      return <ServiceTile key={item.title} division={item.title} />;
    });
  }

  render() {
    const data = this.state.technology;

    if (this.state.error) {
      return <Redirect to="/" />;
    }
    if (
      this.state.loadingTechnology === true ||
      this.state.loadingCompanies === true ||
      this.state.loadingTechnologyList === true
    ) {
      return <Loading />;
    }

    return (
      <main>
        <Section
          width="full"
          title={data.pageTitle}
          name="top"
          border="bottom"
        />

        <TechnologiesList data={data.technologiesList} />
        <Section
          bgColor="green"
          text={[`${data.pageSpoiler}`]}
          width="half_position_left_img_infinite"
          bgPicture="concat-code"
        />
        <Section
          width="quarter_position_left"
          name="services"
          title="INTERESTED IN OUR OTHER SKILLS?"
          text={[
            "Visit our other technology pages if you would like to understand what other technologies we have experience in. Alternatively read how our services could help your business."
          ]}
          button={
            <Button
              color="green"
              shape="rect"
              hover="trans"
              icon="blueArrow"
              href="http://www.godeltech.com/our-delivery-process/"
            >
              Our delivery process
            </Button>
          }
        >
          <List layout="with-grid-and-border">{this.defineServiceTile()}</List>
        </Section>

        {this.defineSpoilerList()}
      </main>
    );
  }
}
