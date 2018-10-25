import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import RelatedCaseStudies from "../../components/related-case-studies/related-case-studies.jsx";
import "./case-study.css";

import { ServiceTile, List, Video, Section, Layout } from "../../components";

export default class CaseStudy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      data: {}
    };

    const { id } = this.props.match.params;
    this.fetchData(id);
  }

  fetchData(id) {
    fetch(`/api/case-studies/${id}`).then(res => {
      if (res.status !== 200) {
        this.setState({ error: true });
      }
      if (res.status === 200) {
        res.json().then(res => {
          this.setState({
            loading: false,
            data: res["case-study"]
          });
        });
      }
    });
  }

  renderVideo() {
    if (this.state.data.video && this.state.data.video.videoID) {
      return (
        <Video
          text={this.state.data.feature}
          company={this.state.data.title}
          author={this.state.data.agents}
          image={this.state.data.video.videoBackground}
          videoId={this.state.data.video.videoID}
        />
      );
    }
    return (
      <Layout
        width="full"
        name="Case-study-statement"
        text={[this.state.data.feature]}
      />
    );
  }
  renderAgents() {
    return this.state.data.agents ? this.state.data.agents : "";
  }
  getRelatedSectors() {
    if (this.state.data.engagementDetails) {
      return this.state.data.engagementDetails.sectors;
    }
  }
  render() {
    if (this.state.error) {
      return <Redirect to="/error/" />;
    }
    if (this.state.loading) {
      return <div>Loading…</div>;
    }
    return (
      <main>
        <Layout
          title={this.state.data.title}
          name="Case-study-tiles"
          width="full"
          text={[this.renderAgents()]}
        >
          <List layout="with-grid-and-border-x5">
            <ServiceTile
              division="services"
              values={this.state.data.engagementDetails.services}
            />
            <ServiceTile
              division="technologies"
              values={this.state.data.engagementDetails.technologies}
            />
            <ServiceTile
              division="sectors"
              values={this.state.data.engagementDetails.sectors}
            />
            <ServiceTile
              division="model"
              values={this.state.data.engagementDetails.model}
            />
            <ServiceTile
              division="duration"
              value={this.state.data.engagementDetails.duration}
            />
          </List>
        </Layout>

        <Section ears={true} blur="top" border="top-red-small" bgColor="aqua">
          <img src={this.state.data.logo} alt="logo" />
        </Section>

        <Section width="full-with-ears" name="home-page-video">
          {this.renderVideo()}
        </Section>

        <Layout
          text={[this.state.data.description]}
          title="DESCRIPTION"
          width="half_position_right"
          name="Case-study-description"
        >
          <div
            style={{
              backgroundImage: `url(${this.state.data.photo}`,
              height: "100%"
            }}
          />
        </Layout>

        <Layout width="full" name="CaseStudy" title="CASE STUDY" text={[]}>
          <ReactMarkdown source={this.state.data.caseStudy} />
        </Layout>

        <Layout
          title={this.state.data.engagementDetails.model}
          width="full"
          name="Case-study-model-title"
        >
          <img src={this.state.data.logo} alt="icon" />
        </Layout>

        <Layout text={[]} width="full" name="Case-study-model-text">
          <ReactMarkdown source={this.state.data.engagementDescription} />
        </Layout>

        <RelatedCaseStudies
          sectors={this.getRelatedSectors()}
          id={this.props.match.params.id}
        />
      </main>
    );
  }
}
