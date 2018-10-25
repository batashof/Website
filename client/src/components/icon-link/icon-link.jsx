import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  automotiveIcon,
  ecommerceIcon,
  energyIcon,
  financeIcon,
  isvIcon,
  manufacturingIcon,
  professionalIcon,
  retailIcon,
  travelIcon
} from './link-icons';

export default class IconLink extends Component {
  defineContent() {
    switch (this.props.name) {
      case 'E-commerce':
        return {
          url: '/industries/e-commerce/',
          icon: ecommerceIcon
        };
      case 'Finance':
        return {
          url: '/industries/finance/',
          icon: financeIcon
        };
      case 'Energy':
        return {
          url: '/industries/energy/',
          icon: energyIcon
        };
      case 'Automotive':
        return {
          url: '/industries/automotive/',
          icon: automotiveIcon
        };
      case 'ISV':
        return {
          url: '/industries/isv/',
          icon: isvIcon
        };
      case 'Travel':
        return {
          url: '/industries/travel/',
          icon: travelIcon
        };
      case 'Manufacturing':
        return {
          url: '/industries/manufacturing/',
          icon: manufacturingIcon
        };
      case 'Professional services':
        return {
          url: '/industries/professional/',
          icon: professionalIcon
        };
      case 'Retail':
        return {
          url: '/industries/retail/',
          icon: retailIcon
        };
      default:
        return {
          url: '/',
          icon: ''
        };
    }
  }
  render() {
    return (
      <Link to={this.defineContent().url}>
        {this.defineContent().icon}
        {this.props.name}
      </Link>
    );
  }
}
