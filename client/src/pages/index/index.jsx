import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { defineUrl } from "../../services/define-url.js";
import "./index.css";

import {
  Logo,
  ServiceTile,
  Input,
  List,
  NewsLink,
  Circle,
  ServicesList,
  Button,
  Layout,
  Carousel,
  MainTile,
  Locations,
  Certificates,
  Loading,
  VideoCarousel
} from "../../components";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loadingNews: true,
      loadingCaseStudies: true,
      newsSpoilers: []
    };
  }

  fetchCaseStudies() {
    fetch(`/api/case-studies`).then(res => {
      if (res.status !== 200) {
        this.setState({ error: true });
      }
      if (res.status === 200) {
        res.json().then(res => {
          let data = res["case-studies"].filter(
            item => item.onHomePage === true
          );
          this.setState({
            loadingCaseStudies: false,
            caseStudies: data
          });
        });
      }
    });
  }

  fetchNewsPreview() {
    fetch(`/api/news`).then(res => {
      if (res.status !== 200) {
        return this.setState({ error: true });
      }
      res.json().then(result => {
        let data = result.news.slice(0, 3);
        this.setState({
          loadingNews: false,
          newsSpoilers: data
        });
      });
    });
  }

  renderNewsItems() {
    return this.state.newsSpoilers.map(item => (
      <NewsLink key={item.title} date={item.date} href={defineUrl(item)}>
        {item.spoiler}
      </NewsLink>
    ));
  }

  componentDidMount() {
    this.fetchCaseStudies();
    this.fetchNewsPreview();
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/" />;
    }
    if (
      this.state.loadingCaseStudies === true ||
      this.state.loadingNews === true
    ) {
      return <Loading />;
    }

    return (
      <main>
        <Layout
          width="full"
          name="home-page-promo"
          title="WE BUILD HIGH PERFORMING TEAMS TO DELIVER MISSION-CRITICAL PROJECTS"
          text={[
            "The partner of choice for IT leaders who are serious and passionate about high quality software delivery"
          ]}
        >
          <MainTile caseStudies={this.state.caseStudies} />
          <Carousel sizeL={2} sizeS={1} autoPlay="5000" controls="in">
            {this.renderNewsItems()}
          </Carousel>
        </Layout>

        <Locations />

        <VideoCarousel companies={this.state.caseStudies} />

        <Layout
          width="full"
          name="home-page-services"
          title="OUR AGILE SERVICES"
        >
          <Logo text={false} />
          <ServicesList legs={true}>
            <Circle color="aqua">team augmentation</Circle>
            <Circle color="red" icon="dedicated-teams">
              dedicated teams
            </Circle>
            <Circle color="violet" icon="product-development">
              product development
            </Circle>
            <Circle color="green" icon="project-based">
            project based
          </Circle>
          </ServicesList>
        </Layout>

        <Layout
          width="quarter_position_left"
          name="home-page-delivery"
          title="AGILE DELIVERY PROCESS"
          text={[
            "Having developed and evolved a unique delivery approach, incorporating agile and nearshore delivery, we have vast experience in agile project deliveries of all shapes and sizes. We understand that its nigh on impossible to gather all requirements at the beginning of your project, requirements you have gathered at the beginning have a strange and annoying habit of changing and there will always be more to do than time and money will allow..."
          ]}
          button={
            <Button
              color="green"
              shape="rect"
              hover="trans"
              arrow="right"
              href="/our-delivery-process/"
            >
              Explore our Approach
            </Button>
          }
        >
          <List layout="with-grid-and-border">
            <ServiceTile division="development" />
            <ServiceTile division="qa" />
            <ServiceTile division="cloud" />
            <ServiceTile division="digital" />
            <ServiceTile division="bi" />
            <ServiceTile division="devops" />
            <ServiceTile division="agile" />
          </List>
        </Layout>

        <Layout
          width="full"
          name="home-page-newsletter"
          title="Newsletter sign up"
          text={[
            "Want to hear more? Sign up and be the first to hear about our latest events, views, and news."
          ]}
        >
          <form action="POST" className="home-page-newsletter__form">
            <Input type="email" placeholder="Email" />
            <Button color="trans" shape="pseudo" arrow="right" />
          </form>
        </Layout>

        <Layout
          width="half_position_right"
          name="home-page-mission"
          title="Our Mission"
          text={[
            "We are on a mission to become the most respected nearshore software development company in Europe. Over the past few years we have experienced a 500% growth in staff and have been catapulted into being recognised as one of the fastest growing nearshore companies in the UK and within the Top 10 IT companies in Belarus. Discover why IT leaders continue to choose Godel…"
          ]}
          button={
            <Button
              shape="rect"
              color="blue"
              hover="blue"
              href="/our-mission/"
              text="The Mission"
              arrow="right"
            >
              The Mission
            </Button>
          }
        />

        <Layout
          width="full"
          name="home-page-work-with"
          title="Who we work with"
        >
          <Carousel sizeL={5} sizeS={3} sizeXs={1} controls="out">
            <a href="https://www.boden.co.uk/">
              <img src="img/boden-logo.png" alt="Boden" />
            </a>
            <a href="https://www.experian.co.uk/">
              <img src="img/experian-logo.png" alt="Experian" />
            </a>
            <a href="https://ao.com/">
              <img src="img/ao-logo.png" alt="AO" />
            </a>
            <a href="http://www.earthport.com/">
              <img src="img/earthport-logo.png" alt="Earthport" />
            </a>
            <a href="https://www.jet2.com/">
              <img src="img/jet2-logo.png" alt="Jet2.com" />
            </a>
            <a href="https://www.first-utility.com/">
              <img src="img/first-utility-logo.png" alt="First Utility" />
            </a>
          </Carousel>
        </Layout>

        <Layout
          width="two-thirds_position_left"
          name="home-page-people"
          title="Our People &amp; Culture"
          text={[
            "We feel that this is the most important factor in your decision making process. Does the culture of the partner you are considering fit in with your own internal culture? Discover more about the Godel family and how we embed ourselves successfully into your teams."
          ]}
          button={
            <Button
              shape="rect"
              color="blue"
              hover="blue"
              arrow="right"
              href="/our-people/"
              text="The Mission"
            >
              Team collaboration
            </Button>
          }
        >
          <Button
            color="trans"
            shape="pseudo"
            arrow="right"
            href="/our-leaders/"
          >
            Our Leaders
          </Button>
        </Layout>

        <Layout
          width="two-thirds_position_right"
          name="home-page-team-skills"
          title="Team skills"
          text={[
            "Belarus is recognised as a talent capital for software development and quality assurance expertise. In leveraging the latest agile methodologies, vendor and open source technology and development tools, our teams maintain a comprehensive spectrum of technical skills and industry knowledge.  With accreditations from Microsoft and Amazon Web Services for our cloud expertise, Godel has proven its exceptional aptitude for delivering cloud projects. In addition to these certifications, Godel holds Microsoft Gold Partner status for Application Development, Data, and DevOps. This is only part of the full dimension of technical skills Godel has to offer…"
          ]}
          button={
            <Button
              shape="rect"
              color="green"
              hover="trans"
              arrow="right"
              href="/team-skills/"
              text="The Mission"
            >
              Technologies and Skills
            </Button>
          }
        >
          <Certificates view="list" />
        </Layout>
      </main>
    );
  }
}
