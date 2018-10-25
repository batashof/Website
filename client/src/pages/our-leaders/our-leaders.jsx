import React, { Component } from "react";
import { Button, Section, LeadersList } from "../../components";
import "./our-leaders.css";

export default class OurLeaders extends Component {
  render() {
    return (
      <main>
        <LeadersList />
        <Section
          text={[
            "Maintaining our reputation as we scale is our number one priority."
          ]}
          width="full"
          name="quotes"
        />
        <Section
          name="deliveryList"
          width="full"
          title="HELPING ORGANISATIONS DELIVER SUCCESSFUL SOFTWARE PROJECTS, ON TIME AND ON BUDGET."
        >
          <ul className="deliveryList">
            <li className="deliveryList__item deliveryList__item_augmentation">
              TEAM AUGMENTATION
            </li>
            <li className="deliveryList__item deliveryList__item_dedicated">
              DEDICATED TEAMS
            </li>
            <li className="deliveryList__item deliveryList__item_product-development">
              PRODUCT DEVELOPMENT
            </li>
            <li className="deliveryList__item deliveryList__item_project-based">
              PROJECT OUTSOURCE
            </li>
          </ul>
          <Button
            color="green"
            shape="rect"
            arrow="right"
            href="/our-delivery-process/"
          >
            Our Delivery process
          </Button>
        </Section>
        <Section width="full">
          <ul className="linkTiles">
            <li className="linkTiles__tile linkTiles__tile_people">
              <Button
                color="trans"
                shape="pseudo"
                arrow="right"
                href="/our-people/"
              >
                Our People and culture
              </Button>
            </li>

            <li className="linkTiles__tile linkTiles__tile_skills">
              <Button
                color="trans"
                shape="pseudo"
                arrow="right"
                href="/team-skills/"
              >
                Team Skills
              </Button>
            </li>
          </ul>
        </Section>
      </main>
    );
  }
}
