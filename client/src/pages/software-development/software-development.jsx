import React, { Component } from "react";
import { ServiceTile, List, Section } from "../../components";
import "./software-development.css";

export default class SoftwareDevelopment extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="SOFTWARE DEVELOPMENT"
          name="top"
          border="bottom"
          text={[
            "Help customers create innovative services and solutions to drive business results. For that purpose we provide rich technology competencies, domain expertise and passion for quality of our software professions."
          ]}
        />
        <Section
          text={[
            "We recognise the importance of bringing together the right mix of experience, skills and disciplines to manage an initiative from concept to successful delivery. We are not prescriptive in our approach, and will take the time to work with you and understand your unique processes, metrics, quirks, strengths and weaknesses, ensuring we establish a highly performant collaborative team.",
            "Godel have developed software systems and products that allow your business to be dynamic and flexible in a way that allows you to compete in this highly competitive businesses world. We provide software development services across multiple industries helping organisations to enhance their existing applications, create a bespoke system or perform system integration of diverse and legacy software to, utilise resources and increase productivity."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />
        <Section
          bgColor="green"
          text={[
            "We have worked in SCRUM, Kanban, Lean and waterfall organisations; although it is important to note that these methodologies are not prescriptive and organisations adapt, borrow and mix these methodologies to suit their personal needs.",
            "Consequently, our exposure to these approaches and the combinations has allowed us to become highly adaptive, with the ability to adopt your particular methodology quickly and productively.",
            "As a consequence of the continual need to move quickly and adapt to new requirements or challenges, Agile Development is fast becoming the preferred approach for software development.",
            "Unlike other methodologies that adopt a more linear approach, Agile Development is an iterative process that places the needs of the business at the centre, cultivating a more collaborative process between the development team and business stakeholders."
          ]}
          width="half_position_left_img_infinite"
          bgPicture="scrum"
        />
        <Section
          bgColor="blue"
          text={[
            "Adapting to different environments has enabled us to build significant experience, not only in terms of our technical ability but also the methodologies we use to increase the quality and productivity of software development teams.",
            "As a result, our software development teams are well versed in techniques such as paired programming, test driven development and continuous integration. We are often asked if we can work in these dynamic, collaborative environments: the answer is yes. It is something we do for our clients every day.",
            "If you would like to talk to us about our software development capability, please contact us on 0161 219 8100."
          ]}
          width="half_position_right_img_infinite"
          bgPicture="ability"
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
