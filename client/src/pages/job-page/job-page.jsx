import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import queryString from "querystring";
import { Redirect } from "react-router-dom";

import {
  SocialLinks,
  ContactCard,
  BenefitsList,
  Button,
  ApplicationForm,
  Loading
} from "../../components";
import "./job-page.css";

export default class JobPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "",
      loading: true,
      job: {}
    };
    const { id } = this.props.match.params;
    this.fetchJob(id);
  }

  fetchJob(id) {
    fetch(`/api/jobs/${id}`).then(res => {
      if (res.status !== 200) {
        return this.setState({ error: true });
      }
      res.json().then(result => {
        this.setState({
          loading: false,
          job: result["job"]
        });
      });
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      page: queryString.parse(global.location.search)
    });
  }

  renderContacts() {
    return this.state.job.managers.map(person => {
      return <ContactCard person={person} key={person.name} />;
    });
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/" />;
    }
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <main className="JobPage">
        <section width="full" className="JobPage-bar">
          <div className="JobPage__wrap">
            <h2 className="JobPage-bar__title">{this.state.job.position}</h2>
            <span className="JobPage-bar__location">
              Location | {this.state.job.location}
            </span>
            <SocialLinks color="white" />
          </div>
        </section>
        <section className="JobPage-main">
          <div className="JobPage__wrap">
            <div className="JobPage-main__content">
              <h2 className="JobPage-main__title">{this.state.job.position}</h2>
              <ReactMarkdown
                source={this.state.job.content}
                className="JobPage-main__text"
              />
              <BenefitsList />
              <Button
                href={`/jobs?division=${this.state.job.division}`}
                pos="beforeText"
                arrow="left"
                shape="pseudo"
                color="trans"
              >
                Back to all jobs
              </Button>
            </div>
            {this.renderContacts()}
          </div>
        </section>
        <ApplicationForm
          position={this.state.job.position}
          managerMail={this.state.job.managers[0].mail}
        />
      </main>
    );
  }
}
