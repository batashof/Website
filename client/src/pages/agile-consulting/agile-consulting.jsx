import React, { Component } from "react";
import { ServiceTile, List, Section } from "../../components";
import "./agile-consulting.css";

export default class AgileConsulting extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="AGILE CONSULTING"
          name="top"
          border="bottom"
          text={[
            "In a world where the need for constant innovation comes as standard, businesses cannot afford to stand still. In order to hold an edge on competitors or close the gap on those who have stolen a march on you, it is essential to stay ahead of the game: no-one can afford to hang around when it comes to innovating through the use of technology."
          ]}
        />
        <Section
          title="AGILE DEVELOPMENT"
          text={[
            "As a consequence of this continual need to move quickly and adapt to new requirements or challenges, Agile Development has become the preferred approach for software delivery. Unlike other methodologies that adopt a more linear approach, such as Waterfall, Agile Development is an iterative process that places the needs of the business at the centre, cultivating a more collaborative process between the development team and business stakeholders.",
            "The Agile Development process breaks down features, defects and enhancements, estimates their effort and then assigns them to a release (each release can be viewed as a mini project.) Each release has a deadline, which can vary in length but will typically be every two weeks. By breaking down large initiatives into smaller releases, priorities can be easily managed and changed as needed. With a new release of the software going into production on a regular basis, clients will be able to see constant value, as applications are continually improved to support the business at the point of need: an important benefit for your organisation."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />
        <Section
          bgColor="green"
          title="LEVERAGE OUR EXPERIENCE"
          text={[
            "At Godel we have significant experience in Agile Development across numerous industries, partnering with companies on agile delivery for many years. In this time we have worked in SCRUM, Kanban and Lean organisations; although it is important to note that these methodologies are not prescriptive and organisations adapt, borrow and mix these methodologies to suit their personal needs.",
            "Consequently, our exposure to these approaches and the combinations has allowed us to become highly adaptive, with the ability to adopt your particular methodology quickly and productively."
          ]}
          width="half_position_left_img_infinite"
          bgPicture="significant-experience"
        />
        <Section
          bgColor="blue"
          title="INCORPORATING DISTRIBUTED AGILE"
          text={[
            "Our clients are all in varying stages of their own agile journey and whilst in infancy, an agile transformation strategy focuses on in-house teams, a natural next step in the journey is the requirement for your in-house team to work in co-operation with distributed members of your own team or a partner company in order for your company to benefit for other reasons (specific expertise requirement, increased capacity, specific project with key integrations etc).",
            "Godel continue to bring industry leading ‘best practice’ experience to the table with clients working in partnership to devise ways to seamlessly integrate with your existing teams setup and minimise the change aspect required to make remote teams a success.",
            "If you would like to talk to us about our experience with Agile Development in your industry please contact us on 0161 219 8100."
          ]}
          width="half_position_right_img_infinite"
          bgPicture="agile-journey"
        />
        <Section
          width="quarter_position_left"
          name="services"
          title="TECHNICAL EXPERTISE"
          text={[
            "Our teams are organised around the Microsoft, Java, and PHP stack of languages and associated technologies. Visit our technology pages to get a detailed understanding of our Business Intelligence skills. If there is something specific you are looking for that we haven’t mentioned, please do contact us and ask. Given the pace of change in our industry, it’s an impossible task to keep this pages up to date!"
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
