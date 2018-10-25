import React, { Component } from "react";
import { ServiceTile, List, Section } from "../../components";
import "./our-delivery-process.css";

export default class OurMission extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="OUR DELIVERY PROCESS"
          name="top"
          border="bottom"
          text={[
            "No two engagements are ever the same. Different technologies, different cultures and different constraints will all drive how the delivery process works."
          ]}
        />
        <Section
          text={[
            "With 15 years’ experience engaging with organisations in many different scenarios, we have the ability to adapt our model to partner successfully with your business. Whether your process is scrum, kanban or another methodology; whether continuous integration is your standard mode of operation or it’s a combination of all of the above, there are a number of factors that will remain constant.",
            "What makes us different is that there are 4 key components that make up our delivery process;  Communication, Transparency, Quality and Honesty."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />
        <Section
          bgColor="green"
          text={[
            "The very heart of our delivery process is communication and building valuable relationships. Ensuring these two practices are actively taking place throughout the engagement ensures success. Supporting this across multiple locations can be a challenge; particularly when working alongside your current communication systems, such as instant messaging for ad-hoc discussion.",
            "To address this, we provide high definition video conferencing facility at your offices. This means that stakeholder engagements, daily stand-ups, project reviews and retrospectives are all held face-to-face through the capability of video conferencing. The ability for the team to see each other, to read body language and share screens and documents leads to a higher level of communication, a better sense of working together and ultimately better outcomes."
          ]}
          title="COMMUNICATION"
          width="half_position_left_img_infinite"
          bgPicture="tables"
        />
        <Section
          bgColor="blue"
          text={[
            "We are firm advocates of Quality Assurance and believe in introducing it into the process at the very earliest opportunity. There is no value in a piece of software which passes the testing phase if it does not meet the initial business requirement that was set in the first place. By working with Quality Assurance to validate business requirements and then validate each subsequent stage, we ensure that all our products are fit for purpose and satisfy all functional and non-functional requirements, meeting your needs at every stage."
          ]}
          title="EMPHASIS ON QUALITY"
          width="half_position_right_img_infinite"
          bgPicture="team"
        />
        <Section
          bgColor="aqua"
          text={[
            "Delivering great software on time and on budget is not easy. There are challenges that need to be overcome, and sometimes processes don’t work quite as they should. We have a philosophy of absolute honesty: if something has gone wrong, or if we can see an issue arising with the way an engagement is being run, we get it on the agenda early. By taking this honest approach at all times, we can address any challenges that we collectively face and determine a plan for resolution.",
            "We find this trustworthy approach ultimately leads to great outcomes and a stronger working partnership between ourselves and your business: which, at the end of the day, is what we all want."
          ]}
          title="TRANSPARENCY"
          width="half_position_left_img_infinite"
          bgPicture="man"
        />
        <Section
          width="quarter_position_left"
          name="services"
          title="OUR EXPERTISE"
          text={[
            "Using some of the most exceptional talent in Europe fronted by UK Directors and account managers our dynamic, flexible, no-nonsense and honest approach sees clients choosing to work with Godel, because we make it our aim to provide the best quality service possible, on time and on budget."
          ]}
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
