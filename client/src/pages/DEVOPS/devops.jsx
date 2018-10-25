import React, { Component } from "react";
import { ServiceTile, List, Section } from "../../components";
import "./devops.css";

export default class Devops extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="DEVOPS"
          name="top"
          border="bottom"
          text={[
            "The mission is to develop and release software quicker whilst maintaining the highest level of quality. Getting products to market is often a challenging, time-consuming process for product managers and their businesses."
          ]}
        />
        <Section
          text={[
            "DevOps is a set of practices and skills that help business to evolve quickly in the modern era. Defined semantically, it’s the combination of software development skills and set practices for running and maintaining a solution without an impact on business availability for clients, the company, employees and partners.",
            "Continuous Delivery can aid businesses allowing them to be proactive and reactive to competitor progression or customer needs. Through frequent, high quality software releases, continuous delivery enables an organisations software, application or product to absorb the latest user feedback or required changes and make the improvements for users and rapidly release to the market."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />
        <Section
          bgColor="green"
          title="FASTER, SMARTER DELIVERY"
          text={[
            "The introduction of CD/CI is now commonplace amongst respected industry figures and Godel recommend the introduction of this process into all of our clients’ software delivery process.",
            "Benefits of the introduction of CI/CD:"
          ]}
          button={
            <ul>
              <li>
                Establish a solid working foundation for software releases
              </li>
              <li>
                Reduce the risk involved with integration of new product
                features
              </li>
              <li>
                Identify issues earlier in the process before your customers do!
              </li>
              <li>Reduce the time spent fixing bugs</li>
              <li>Focus more time on the development of new features</li>
              <li>
                Remove the need for you to cross your fingers for a successful
                release
              </li>
              <li>Demonstrate fast action to your customers</li>
            </ul>
          }
          width="half_position_left_img_infinite"
          bgPicture="benefits"
        />
        <Section
          bgColor="blue"
          text={[
            "Continuous Integration (CI) is a development practice that requires teams to share code development in a shared repository frequently. Each check-in is then verified by automation, allowing teams to identify defects or blockers early. By checking the code in regularly, the team can identify errors more quickly, and locate them easily.",
            "Our clients continue to engage with Godel to work on the establishment of continuous deployment environments and best practices. Whatever the scenario we face (whether the environment is already there or not in place) Godel maintain a keen eye on the industry developments around CI/CD and bring this value and the latest information surrounding this subject to our clients."
          ]}
          width="half_position_right_img_infinite"
          bgPicture="team-collaboration"
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
