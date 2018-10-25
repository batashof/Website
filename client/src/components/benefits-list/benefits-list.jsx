import React from "react";
import "./benefits-list.css";
import ReactSVG from "react-svg";

function BenefitsList() {
  return (
    <div className="BenefitsList">
      <h2 className="BenefitsList__title">WHAT WE OFFER:</h2>
      <ul className="BenefitsList__list">
        <li className="BenefitsList__item">
          <ReactSVG
            path="/icons/coins.svg"
            wrapperClassName="BenefitsList__icon"
          />
          COMPETITIVE SALARY
        </li>
        <li className="BenefitsList__item">
          <ReactSVG
            path="/icons/uk-flag.svg"
            wrapperClassName="BenefitsList__icon"
          />
          BUSINESS TRIPS TO UK AND EUROPE
        </li>
        <li className="BenefitsList__item">
          <ReactSVG
            path="/icons/badge.svg"
            wrapperClassName="BenefitsList__icon"
          />
          INTERESTING PROJECTS
        </li>
        <li className="BenefitsList__item">
          <ReactSVG
            path="/icons/smile.svg"
            wrapperClassName="BenefitsList__icon"
          />
          PROFESSIONAL HIGH-SKILLED TEAM
        </li>
        <li className="BenefitsList__item">
          <ReactSVG
            path="/icons/cup.svg"
            wrapperClassName="BenefitsList__icon"
          />
          ON-GOING PROFESSIONAL DEVELOPMENT AND INVESTMENT
        </li>
        <li className="BenefitsList__item">
          <ReactSVG
            path="/icons/discussion.svg"
            wrapperClassName="BenefitsList__icon"
          />
          DEMOCRACY - TAKE PART IN SHAPING THE FUTURE OF THE COMPANY
        </li>
        <li className="BenefitsList__item">
          <ReactSVG
            path="/icons/coffee.svg"
            wrapperClassName="BenefitsList__icon"
          />
          STRONG RELATIONSHIPS WITH CLIENTS
        </li>
      </ul>
    </div>
  );
}

export default BenefitsList;
