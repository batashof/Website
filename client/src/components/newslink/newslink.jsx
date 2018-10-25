import React, { Component } from 'react';
import './newslink.css';

class NewsLink extends Component {
  
  parseDate(){
    const date = new Date(this.props.date);
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    return {
      day: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear()
    }
  };
  
  render() {
    const time = this.parseDate();
    
    return (
      <div className="Newslink">
        <div className="Newslink__date">
          <span className="Newslink__day">{time.day}</span> 
          <span className="Newslink__monthyear">{time.month} {time.year}</span>
        </div>
        <a href={this.props.href} className="Newslink__link">
          {this.props.children}
        </a>
      </div>
    );
  }
}

NewsLink.defaultProps = {
  date: '01/01/1970'
};

export default NewsLink;
