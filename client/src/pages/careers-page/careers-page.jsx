import React from "react";
import "./careers-page.css";

import {
  Button,
  Layout,
  Locations,
  CareersVideo,
  HotJobsList,
  BenefitGrid
} from "../../components";

function CareersPage() {
  return (
    <main>
      <CareersVideo />
      <Locations />
      <HotJobsList />
      <BenefitGrid />

      <section className="Careers-banner">
        <div className="Careers-banner__wrap_position_left">
          <p className="Careers-banner__text">
            WE DO SOFTWARE DEVELOPMENT... PROPERLY.
          </p>
        </div>
        <div className="Careers-banner__wrap_position_right" />
      </section>

      <Layout
        width="half_position_left"
        name="Careers-culture"
        title="GODEL DNA AND CULTURE"
        text={[
          "What do we look for in a Godel employee? We seek talented individuals who want to make a difference, people who like to go the extra mile to ensure quality. If you are searching for a mission rather than a job, you have certainly found the right place!"
        ]}
        button={
          <Button
            shape="rect"
            color="green-trans"
            hover="green"
            href="/about-us/"
            arrow="right"
          >
            Discover more
          </Button>
        }
      />

      <Layout
        width="half_position_right"
        name="Careers-member"
        title="A DAY IN THE LIFE OF A GODEL TEAM MEMBER"
        text={[
          "See what your peers, in your chosen role, experience on a daily basis whilst working at Godel and hear about some of their most embarrassing moments whilst working at the company…"
        ]}
        button={
          <Button
            shape="rect"
            color="green-trans"
            hover="green"
            href="/our-people/"
            arrow="right"
          >
            Discover more
          </Button>
        }
      />
    </main>
  );
}
export default CareersPage;
