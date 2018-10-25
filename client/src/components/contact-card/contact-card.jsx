import React, { Component } from "react";
import ReactSVG from "react-svg";
import "./contact-card.css";

export default class ContactCard extends Component {
  renderContacts(person) {
    return (
      <React.Fragment>
        {person.tel && (
          <a href={`tel:${person.tel}`} className="ContactCard__option">
            <ReactSVG
              path="/icons/phone.svg"
              wrapperClassName="ContactCard__icon"
            />
            {person.tel}
          </a>
        )}
        {person.mail && (
          <a href={`mailto:${person.mail}`} className="ContactCard__option">
            <ReactSVG
              path="/icons/mail.svg"
              wrapperClassName="ContactCard__icon"
            />
            {person.mail}
          </a>
        )}
        {person.skype && (
          <a href={`skype:${person.skype}`} className="ContactCard__option">
            <ReactSVG
              path="/icons/skype-logo.svg"
              wrapperClassName="ContactCard__icon"
            />
            {person.skype}
          </a>
        )}
        {person.address && (
          <address className="ContactCard__option ContactCard__option_address">
            <ReactSVG
              path="/icons/pin.svg"
              wrapperClassName="ContactCard__icon"
            />
            {person.address}
          </address>
        )}
      </React.Fragment>
    );
  }
  render() {
    let { person } = this.props;
    return (
      <div className="ContactCard">
        <h3 className="ContactCard__title">{person.position}</h3>
        <div className="ContactCard__card">
          <img
            src={person.photo}
            alt={person.name}
            className="ContactCard__photo"
          />
          <h4 className="ContactCard__name">
            Contact<br />
            {person.name}
          </h4>
          {this.renderContacts(person)}
        </div>
      </div>
    );
  }
}
