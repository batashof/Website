import React, { Component } from "react";
import {
  List,
  Circle,
  ServicesList,
  Section,
  ServiceTile
} from "../../components";

export default class TeamSkills extends Component {
  render() {
    return (
      <main>
        <Section width="full" title="TEAM SKILLS" name="top">
          <ServicesList legs={true}>
            <Circle size="m" color="aqua" icon="team-augmentation">
              team-augmentation
            </Circle>
            <Circle size="m" color="red" icon="dedicated-teams">
              dedicated-teams
            </Circle>
            <Circle size="m" color="violet" icon="product-development">
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
          title="TECHNICAL EXPERTISE"
          text={[
            "Belarus is recognised as a talent capital for technology expertise. Combining the talent available to leverage in Belarus along with UK based client management and service delivery allows Godel to provide IT leaders with a scalable option for talent. Our team utilise the latest agile methodologies and tools and maintain a comprehensive spectrum of technical skills and industry knowledge."
          ]}
        >
          <List layout="with-grid-and-border">
            <ServiceTile division="microsoft" />
            <ServiceTile division="java" />
            <ServiceTile division="php" />
            <ServiceTile division="qa-tech" />
            <ServiceTile division="bi-tech" />
            <ServiceTile division="js" />
          </List>
        </Section>
      </main>
    );
  }
}
