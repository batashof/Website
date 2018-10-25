import React, { Component } from "react";
import {
  List,
  Circle,
  ServicesList,
  Section,
  ServiceTile,
  Button
} from "../../components";

export default class OurServices extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="OUR SERVICES"
          name="top"
          text={[
            "Highly performant teams possessing world-class expertise across agile consulting, continuous delivery, business analysis, software development, quality assurance, digital and business intelligence are available for you to leverage by making a single phone-call."
          ]}
        >
          <ServicesList legs={true}>
            <Circle size="m" color="aqua" icon="team-augmentation">
              team-augmentation
            </Circle>
            <Circle size="m" color="violet" icon="dedicated-teams">
              dedicated-teams
            </Circle>
            <Circle size="m" color="red" icon="product-development">
              product-development
            </Circle>
            <Circle size="m" color="green" icon="project-based">
              project-based
            </Circle>
          </ServicesList>
        </Section>
        <Section
          width="quarter_position_left"
          name="services"
          title="AGILE DELIVERY PROCESS"
          text={[
            "Having developed and evolved a unique delivery approach, incorporating agile and nearshore delivery, we have vast experience in agile project deliveries of all shapes and sizes. We understand that its nigh on impossible to gather all requirements at the beginning of your project, requirements you have gathered at the beginning have a strange and annoying habit of changing and there will always be more to do than time and money will allow..."
          ]}
          button={
            <Button
              color="green"
              shape="rect"
              hover="trans"
              arrow="right"
              href="/our-delivery-process/"
            >
              Explore our Approach
            </Button>
          }
        >
          <List layout="with-grid-and-border">
            <ServiceTile division="development" />
            <ServiceTile division="qa" />
            <ServiceTile division="cloud" />
            <ServiceTile division="digital" />
            <ServiceTile division="bi" />
            <ServiceTile division="devops" />
            <ServiceTile division="agile" />
          </List>
        </Section>
      </main>
    );
  }
}
