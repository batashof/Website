import React, { Component } from 'react';
import './about-us-grid.css';

export default class AboutUsGrid extends Component {
  renderItems() {
    const itemsData = [
      { title: 'PARTNER OF CHOICE FOR IT LEADERS', className: 'partner' },
      {
        title: '400+ EMPLOYEES WITH 500% STAFF GROWTH IN 5 YEARS',
        className: 'emploees'
      },
      {
        title: 'RENOWNED MICROSOFT, JAVA, PHP, QA AND MOBILE TEAMS',
        className: 'teams'
      },
      { title: 'UK OWNED BUSINESS', className: 'uk' },
      { title: 'ISO 9001 & 27001 ACCREDITED', className: 'iso' },
      { title: 'WORK CORE UK HOURS', className: 'hours' },
      { title: '99.2% CLIENT RETENTION', className: 'retention' },
      {
        title: 'HD VIDEO CONFERENCING PROVIDED FREE OF CHARGE TO ALL CLIENTS',
        className: 'hd'
      },
      {
        title: 'GODEL DNA > DYNAMIC > AGILE > NO-NONSENSE > FLEXIBLE > HONEST',
        className: 'dna'
      },
      { title: '56% GODEL MANAGEMENT TEAM ARE FEMALE', className: 'female' }
    ];
    let items = itemsData.map(item => {
      return (
        <li
          className={
            'AboutUsGrid__item AboutUsGrid__item_feature_' + item.className
          }
          key={item.className}
        >
          <span
            className={
              'AboutUsGrid__title AboutUsGrid__title_feature_' + item.className
            }
          >
            {item.title}
          </span>
        </li>
      );
    });
    return items;
  }
  render() {
    return <ul className="AboutUsGrid">{this.renderItems()}</ul>;
  }
}
