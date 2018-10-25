import React, { Component } from "react";
import { ServiceTile, List, Section } from "../../components";
import "./cloud.css";

export default class Cloud extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="CLOUD"
          name="top"
          border="bottom"
          text={[
            "Whether you’re moving legacy systems to the cloud or building new cloud-ready applications, Godel can help you take advantage of the business benefits that cloud computing delivers in terms of speed of performance, availability and a quality customer service experience."
          ]}
        />
        <Section
          text={[
            "The cloud is increasingly at the core of every organisation’s delivery, enabling and making them ‘digitally native’ businesses. Every company, no matter how old or in which industry it operates, will have digital delivery at its heart in order to grow and prosper in line with demand."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />
        <Section
          title="MONOLITHIC TO MICROSERVICES"
          bgColor="green"
          text={[
            "Using the microservices architecture, Godel helps its clients breathe new life into legacy applications to deliver the speed and agility required for rapid growth.",
            "We take apart monolithic applications breaking them down into smaller microservices, re-engineering them as a suite of independently deployable modular services which, when put together, work to serve a business goal.",
            "Re-architecting systems in this way means that continuous improvement and integration of software is easier to achieve – constantly improving each microservice and, by default, the sum of their parts. Rather than delivering software updates annually as a ‘bells and whistles’ launch, software is updated constantly without customers even noticing."
          ]}
          width="half_position_left_img_infinite"
          bgPicture="microservices"
        />
        <Section
          bgColor="blue"
          title="EXPERIAN"
          text={[
            "For many of our clients, we have helped redevelop their mission critical legacy systems and make them cloud-ready. Financial services firm Experian took steps with Godel to move its three main applications to the cloud: Experian Business Express, My Business Profile and Web Admin, fully re-architecting them by moving them onto the Microsoft Azure platform. Watch more about Experian’s experience here.",
            "Cloud Infrastructure and support Godel works in partnership with Microsoft Azure, Amazon Web Services and Google Cloud to deliver cloud infrastructure as a service (IAAS) for clients. Where applications have been migrated or built by the Godel team, we also offer 24x7 after care support."
          ]}
          width="half_position_right_img_infinite"
          bgPicture="experian"
        />
        <Section
          width="quarter_position_left"
          name="services"
          title="TECHNICAL EXPERTISE"
          text={[
            "Our teams are organised around the Microsoft, Java, and PHP stack of languages and associated technologies. Visit our technology pages to get a detailed understanding our of software development skills. If there is something specific you are looking for that we haven’t mentioned, please do contact us and ask. Given the pace of change in our industry, it’s an impossible task to keep this pages up to date!"
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
