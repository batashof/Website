import React from "react";
import "./project-based.css";

import {
  ServiceTile,
  List,
  Circle,
  ServicesList,
  Button,
  Video,
  Section
} from "../../components";

function ProjectBased() {
  return (
    <main>
      <Section
        title="PROJECT OUTSOURCE"
        name="top"
        border="bottom"
        text={[
          "It is impossible to gather all the requirements at the start of the project. Whatever requirements you do gather are guaranteed to change. There will always be more to do than time and money will allow and no matter how many times you highlight this to the board, they nod their heads but still don’t understand. Sound familiar?"
        ]}
      >
        <ServicesList>
          <Circle size="s" color="aqua" icon="team-augmentation">
            team augmentation
          </Circle>
          <Circle size="s" color="violet" icon="dedicated-teams">
            dedicated teams
          </Circle>
          <Circle size="s" color="red" icon="product-development">
            product development
          </Circle>
          <Circle size="m" color="green" icon="project-based" active={true}>
            project based
          </Circle>
        </ServicesList>
      </Section>
      <Section
        title="IT LEADERS ARE NOT CATS – THEY DO NOT GET NINE LIVES!"
        text={[
          "When faced with the challenge of a mission-critical project needing to be delivered, our clients in IT leadership position’s first port of call would always be to discuss the requirement with their in-house team. Dependent on the demand placed on the internal team at that current time or the required scale of resources or the availability of scaling options, a decision would then be made on who is best-suited to deliver. Unfortunately, IT leaders do not get nine lives and this decision on choice of a partner can be make or break in terms of reputation and job!",
          "Here at Godel, we understand your position because we share the same pressure. Our number one priority is maintaining our reputation for delivery of quality, with this being the essence of the Godel family culture.",
          "Our highly performant team members possess vast expertise in agile consulting, continuous delivery, business analysis, software engineering, quality assurance, digital and business intelligence and are committed to maintaining the reputation of Godel and our client’s senior leadership teams.",
          "Our aim is to collaborate closely with you to manage expectations and deliver on a shared mission to be on-time and on-budget."
        ]}
        ears={true}
        blur="top"
        bgColor="aqua"
      />

      <Section width="full-with-ears" name="home-page-video">
        <Video
          image="http://img.youtube.com/vi/yjxDcZEAsZo/maxresdefault.jpg"
          videoId="yjxDcZEAsZo"
          text="Our collaboration with Godel is the ideal strategic partnership; it supports our growth by allowing us to get new developments and products to market faster whilst increasing our software quality."
          company="First Utility"
          author="Keith Sterling"
          link="https://www.first-utility.com/"
        />
      </Section>
      <Section
        width="half_position_right"
        name="video-footer"
        title="First Utility"
        bgColor="blue"
        button={
          <Button
            shape="rect"
            color="green"
            hover="trans"
            arrow="right"
            href="/case-study/first-utility/"
          >
            See full case study
          </Button>
        }
      >
        <p>
          Explore why the UK’s fastest growing independent energy company First
          Utility chose Godel to collaborate alongside on a mission-critical
          project delivery.
        </p>
      </Section>

      <Section
        width="quarter_position_left"
        name="services"
        title="MORE FROM THIS SERVICE"
        text={[
          "Finding the right partner to support you with the delivery of a software development project can be a challenge. Godel’s project-based outsourcing model is designed to meet your requirements, explore the categories of our comprehensive technical expertise."
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

      <Section
        bgColor="green"
        text={[
          "Agile development is advancing and now becoming the de-facto standard for project delivery for development teams across the globe. In the main, agile is also the preferred methodology proposed by Godel for project outsourcing engagements.",
          "Board’s that are leading companies are far more knowledgable around agile delivery than ever before, however, there are fundamental features of agile projects that shall always rear their heads throughout projects, whichever delivery methodology is chosen – The management of expectations around timeline and original budget.",
          "We empathise that it is impossible to gather all the requirements at the start of the project. Whatever requirements you do gather are guaranteed to change. There will always be more to do than time and money will allow and no matter how many times you highlight this to the board, they nod their heads but still don’t understand.",
          "We are here to help and our vast experience of the delivery of mission-critical projects with agile delivery is leveraged by many of your IT leadership peers with proven success."
        ]}
        title="PROJECT DELIVERY APPROACH"
        width="half_position_left_img_infinite"
        bgPicture="outsource"
      />
      <Section
        bgColor="blue"
        text={[
          "Working closely with your product owner or business stakeholders our pre-sales technical team members take part in an initial discovery phase to collaborate with your team to define your requirements in greater detail.",
          "This enables Godel to help our clients to build the business case, define the budget and timeline or depending on the urgency surrounding the mission, progress into a foundation phase and then into full scale delivery.",
          "Clients are kept abreast of project and budget status throughout the delivery via a Godel dedicated project manager or scrum master and are able to review delivery commitments, timescales, in an agile delivery process inclusive of stand up’s, product backlog grooming, sprint planning and retrospectives.",
          "Combined with UK based account management, service delivery management and leadership, the overall solution provided for a project outsource or project collaboration engagement is thoroughly controlled, measured and cost-effective.",
          "Utilising pre-formed delivery teams that are aligned with the technology skills required, members who are experienced in agile delivery and are proficient in management of expectation, our clients are able to leverage our exceptional project teams to deliver on exciting and market disruptive missions."
        ]}
        title="HOW DO WE PREPARE AND PLAN FOR SUCCESS?"
        width="half_position_right_img_infinite"
        bgPicture="working"
      />
      <Section width="full" name="line" bgColor="aqua" />
    </main>
  );
}

export default ProjectBased;
