import React from "react";
import { Link } from "react-router-dom";
import "./charity-section.css";

export default function CharitySection() {
  return (
    <section className="about-us-charity">
      <div className="about-us-charity__wrap">
        <Link
          className="about-us-charity__link"
          to="/news/2017-04-12--chernobyl-children-charity-update/"
        >
          <div className="about-us-charity__text">
            <h3 className="about-us-charity__title">
              CHERNOBYL CHILDREN'S PROJECT
            </h3>
            <p>
              "Since the start of 2015 we have pledged to provide a monthly
              charitable donation as on-going support to UK and Belarus based
              Children and Young Adults Charity, Chernobyl Children’s Project
              UK."
            </p>
            <p>
              "The organisation delivered ground-breaking work in Belarus
              creating a number of care centres for children and young adults
              with disabilities, employing care nurses and teachers for the
              centres, whilst continuing to sponsor visits for children and
              young adults to the UK."
            </p>
          </div>
          <div className="about-us-charity__img" />
        </Link>
      </div>
    </section>
  );
}
