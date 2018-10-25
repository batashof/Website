import React, { Component } from 'react';
import logo_text from './logo_text.svg';
import logo_size_l from './logo_size_l.svg';
import './logo.css';

export default class Logo extends Component {
  defineSrc() {
    return this.props.text ? logo_text : logo_size_l;
  }

  defineClass() {
    return this.props.text ? 'Logo Logo_size_m Logo_with-text' : 'Logo Logo_size_l';
  }

  render() {
    return (
      <img
        src={this.defineSrc()}
        alt={this.props.alt}
        className={this.defineClass()}
      />
    );
  }
}

Logo.defaultProps = { alt: 'Godel Technologies' };

