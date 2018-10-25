import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './service-link.css';

export default class ServiceLink extends Component {
  defineContent() {
    switch (this.props.name) {
      case 'team-augmentation':
        return {
          url: '/team-augmentation/',
          title: 'Team augmentation',
          text:
            'Highly skilled resources augmented into your existing in-house team to help increase the velocity, frequency and quality of your software delivery.'
        };
      case 'dedicated-teams':
        return {
          url: '/dedicated-teams/',
          title: 'Dedicated teams',
          text:
            'Create a dedicated delivery capability consisting of cross-functional resources to become an extension of your in-house delivery teams.'
        };
      case 'project-based':
        return {
          url: '/project-based/',
          title: 'Project based',
          text:
            'Fast access to a highly performant delivery team to aid you in a mission-critical software delivery to your stakeholders or customers.'
        };
      case 'product-development':
        return {
          url: '/product-development/',
          title: 'Product development',
          text:
            'Providing expert engineers to help design, develop and delivery quality software products that your customers love using.'
        };
      default:
        return {
          url: 'http://www.godeltech.com/',
          title: 'Untitled',
          text: ''
        };
    }
  }
  render() {
    return (
      <Link
        to={this.defineContent().url}
        className={'ServiceLink ServiceLink_section_' + this.props.name}
      >
        <span className="ServiceLink__title">{this.defineContent().title}</span>
        <span className="ServiceLink__text">{this.defineContent().text}</span>
      </Link>
    );
  }
}
