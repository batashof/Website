import React, { Component } from "react";
import { Carousel, Layout, List } from "../../components";
import "./certificates.css";

export default class Certificates extends Component {
  renderContent() {
    return [
      <img src="/img/java-logo.svg" alt="Java" key="Java" />,
      <img src="/img/php-logo.svg" alt="PHP" key="PHP" />,
      <img
        src="/img/microsoft-logo.svg"
        alt="Microsoft partner"
        key="Microsoft partner"
      />,
      <img
        src="/img/aws-logo.svg"
        alt="AWS partner network"
        key="AWS partner network"
      />,
      <img
        src="/img/azure-logo.svg"
        alt="Microsoft Azure"
        key="Microsoft Azure"
      />,
      <img src="/img/angular-logo.svg" alt="Angular" key="Angular" />,
      <img src="/img/nodejs-logo.svg" alt="NodeJS" key="NodeJS" />
    ];
  }

  returnAsList() {
    return <List layout="vertical">{this.renderContent()}</List>;
  }

  returnAsCarousel() {
    return (
      <Layout width="full" name="certificates-carousel">
        <Carousel
          sizeL={5}
          sizeM={3}
          sizeS={2}
          sizeXs={1}
          controls="out"
          autoPlay={4000}
        >
          {this.renderContent()}
        </Carousel>
      </Layout>
    );
  }

  render() {
    return this.props.view ? this.returnAsList() : this.returnAsCarousel();
  }
}
