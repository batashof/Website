import React, { Component } from "react";
import { Button, ServiceTile, List, Section } from "../../components";
import "./our-mission.css";

export default class OurMission extends Component {
  render() {
    return (
      <main>
        <Section width="full" title="OUR MISSION" name="top" border="bottom">
          <img className="OurMission-img" src="/img/cup-icon.svg" alt="Cup" />
          <p className="OurMission-description">
            TO BECOME THE MOST RESPECTED NEARSHORE SOFTWARE DEVELOPMENT COMPANY
            IN EUROPE.
          </p>
        </Section>
        <Section
          text={[
            "Here at Godel, we are renowned for our direct, no-nonsense attitude to delivery and this successful approach has enabled us to build our business on the basis of positive referrals from IT leaders. Our unique culture has been honed since the company’s inception. Having fun whilst delivering high quality software output is a key principle embedded into every single member of the Godel team, ensuring we on-board and retain exceptional talent.",
            "Commitment to do the right thing and be prepared to go the extra mile to make it happen has been the foundation which our family has and will always be based upon."
          ]}
          width="full"
          ears={true}
          blur="bottom"
          bgColor="aqua"
          button={
            <Button
              color="green"
              shape="rect"
              hover="trans"
              icon="greenArrow"
              href="/our-delivery-process/"
            >
              Our delivery process
            </Button>
          }
        />
        <Section
          text={[
            "Do the right thing, it will gratify some and astonish the rest."
          ]}
          width="full"
          name="quotes"
        />
        <Section
          bgColor="blue"
          text={[
            "Trust is a key factor when partnering with any software development company. Understanding the status of a requirement, user story, ticket, phase or project is key to in order to demonstrate knowledge and experience and ensure that the business need is actually resolved.",
            "Building on our philosophy of frequent communication in agile delivery, we take care to ensure that requirements are understood at the first time of asking and delivered to the quality our clients expect. ",
            "No two engagements are ever the same. Different technologies, different cultures and different constraints will all drive how the delivery process works. With 15 years’ experience engaging with organisations in many different scenarios, we have the ability to adapt our model to partner successfully with your business.",
            "Whether your process is scrum, kanban or another methodology; whether continuous integration is your standard mode of operation or it’s a combination of all of the above, there are a number of factors that are taken into consideration when our recommendations are made. This enables us to tailor solutions to fit into our clients needs and environments."
          ]}
          title="ESTABLISHING TRUST"
          width="half_position_right_img_infinite"
          bgPicture="trust"
        />

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

        <Section
          bgColor="green"
          text={[
            "In a world where innovation is constant businesses cannot stand still. In order to hold an edge on competitors or close the gap on those who have stolen a march on you, it is essential to stay ahead of the game: no-one can afford to hang around when it comes to innovating through the use of technology.",
            "At Godel we have significant experience in Agile Development across numerous industries, partnering with companies as a provider of Extended Software Development Teams since 2006. In this time we have worked in SCRUM, Kanban and Lean organisations; although it is important to note that these methodologies are not prescriptive and we are able to adapt, borrow and mix these methodologies to ensure successful delivery.",
            "Consequently, our vast exposure to these approaches has allowed us to become highly adaptive, with the ability to adopt your particular methodology quickly and productively."
          ]}
          title="TAILORED PROCESSES TO FIT IN WITH YOUR OWN TEAMS"
          width="half_position_left_img_infinite"
          bgPicture="desc"
        />
        <Section width="full" name="line" bgColor="aqua" />
      </main>
    );
  }
}
