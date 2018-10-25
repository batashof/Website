import React, { Component } from "react";
import Layout from "../layout/layout.jsx";
import ReactMarkdown from "react-markdown";
import "./technologies-list.css";

export default class TechnologiesList extends Component {
  render() {
    return (
      <Layout name="TechnologiesList" with="full">
        <ReactMarkdown source={this.props.data} />
      </Layout>
    );
  }
}
