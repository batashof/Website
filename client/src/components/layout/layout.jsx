import React, { Component } from 'react';
import './layout.css';

export default class Layout extends Component {
  defineWidth() {
    return this.props.width
      ? 'Layout Layout_width_' + this.props.width
      : 'Layout';
  }

  defineName() {
    return this.props.name ? this.props.name : '';
  }

  defineTitle() {
    if (this.props.title) {
      return (
        <h2 className={this.defineName() + '__title'}>{this.props.title}</h2>
      );
    }
    return '';
  }

  defineText() {
    if (this.props.text) {
      return this.props.text.map(paragraph => {
        return (
          <p
            className={this.defineName() + '__text'}
            key={paragraph.slice(0, 30)}
          >
            {paragraph}
          </p>
        );
      });
    }
  }

  defineLayoutClassName() {
    return this.defineWidth() + ' ' + this.defineName();
  }

  defineWrapClassName() {
    return 'Layout__wrap ' + this.defineName() + '__wrap';
  }

  render() {
    switch (this.props.width) {
      case 'quarter_position_left':
      case 'half_position_left':
      case 'two-thirds_position_left':
      case 'half_position_left_img_infinite':
        return (
          <section className={this.defineLayoutClassName()}>
            <div className={this.defineWrapClassName()}>
              <div className="Layout__main">
                {this.defineTitle()}
                {this.defineText()}
                {this.props.button}
              </div>
              <div className="Layout__side">{this.props.children}</div>
            </div>
          </section>
        );
      case 'quarter_position_right':
      case 'half_position_right':
      case 'two-thirds_position_right':
      case 'half_position_right_img_infinite':
        return (
          <section className={this.defineLayoutClassName()}>
            <div className={this.defineWrapClassName()}>
              <div className="Layout__side">{this.props.children}</div>
              <div className="Layout__main">
                {this.defineTitle()}
                {this.defineText()}
                {this.props.button}
              </div>
            </div>
          </section>
        );
      case 'full':
      case 'full-with-ears':
      default:
        return (
          <section className={this.defineLayoutClassName()}>
            <div className={this.defineWrapClassName()}>
              <div className="Layout__main">
                {this.defineTitle()}
                {this.defineText()}
                {this.props.button}
                {this.props.children}
              </div>
            </div>
          </section>
        );
    }
  }
}
