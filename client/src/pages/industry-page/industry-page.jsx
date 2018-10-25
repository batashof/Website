import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import {
  Section,
  CaseStudySpoiler,
  Carousel,
  Slider,
  FeatureTile,
  Layout,
  List
} from "../../components";
import "./industry-page.css";

export default class IndustryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      companies: [],
      pageTitle: "",
      error: false
    };
    this.isFinishedRenderSlides = false;
    const { id } = this.props.match.params;
    this.fetchCompanies(id);
  }

  fetchTitle(id) {
    fetch(`/api/industries/${id}`).then(res => {
      if (res.status !== 200) {
        return this.setState({ error: true });
      }
      res.json().then(result => {
        this.setState({
          pageTitle: result.industry.title
        });
      });
    });
  }
  componentWillReceiveProps() {
    let url = global.location.pathname.split("/")[2];
    this.setState(
      {
        loading: true
      },
      this.fetchCompanies(url)
    );
  }
  fetchCompanies(id) {
    this.fetchTitle(id);
    fetch(`/api/case-studies?industry=${id}`).then(res => {
      this.setState({ loading: false });
      if (res.status !== 200) {
        return this.setState({ error: true });
      }
      res.json().then(result => {
        let data = result["case-studies"].filter(item => item.feature);
        this.setState({
          companies: data
        });
      });
    });
  }

  defineSpoilerList() {
    let bgColor = "dark-blue";
    const companies = this.state.companies;

    return companies.filter(item => item.id).map((item, index) => {
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
          href={item.id}
        />
      );
    });
  }

  defineLogoList() {
    const companies = this.state.companies;
    return companies.map((item, index) => (
      <Link to={"/case-study/" + item.id} key={item.logo}>
        <img className="Industries__logo" src={item.logo} alt={item.logo} />
      </Link>
    ));
  }

  defineLink(item) {
    if (item.id) {
      return "/case-study/" + item.id;
    }
  }
  defineSlides() {
    return this.state.companies.map((item, index) => {
      if (index === this.state.companies.length - 1) {
        this.isFinishedRenderSlides = true;
      }
      return (
        <FeatureTile
          href={this.defineLink(item)}
          key={item.title + item.logo}
          height="300"
          curtain={item.bannerFilter}
          logo={item.logo}
          bgPicture={this.props.bgPicture}
        >
          {item.feature}
        </FeatureTile>
      );
    });
  }
  renderSlider() {
    let data = this.defineSlides();
    if (this.isFinishedRenderSlides)
      return <Slider controlsPosition="bottom">{data}</Slider>;
  }

  defineCarousel() {
    if (this.state.companies.length > 4) {
      return (
        <Carousel sizeL={4} sizeM={3} sizeS={2} sizeXs={1} controls="out">
          {this.defineLogoList()}
        </Carousel>
      );
    }
    return <List layout="horisontal-centred">{this.defineLogoList()}</List>;
  }

  render() {
    const Loading = () => <div>Loading…</div>;
    if (this.state.error) {
      return <Redirect to="/" />;
    }
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <main>
        <Section
          width="full"
          title={this.state.pageTitle}
          name="top"
          text={[
            "Are you looking for a partner to work with to make your vision a reality?"
          ]}
        />

        <Layout width="full" name="Industries">
          {this.renderSlider()}
        </Layout>

        <Layout
          name="Industries-carousel"
          title="WHO WE WORK WITH"
          width="full"
        >
          {this.defineCarousel()}
        </Layout>

        {this.defineSpoilerList()}
      </main>
    );
  }
}
