import React from "react";
import "./product-development.css";

import {
  ServiceTile,
  List,
  Circle,
  ServicesList,
  Button,
  Video,
  Section
} from "../../components";

function ProductDevelopment() {
  return (
    <main>
      <Section
        title="PRODUCT DEVELOPMENT"
        name="top"
        border="bottom"
        text={[
          "If you’re looking for an expert development team to deliver a new software product to offer customers, then Godel can help. Our expertise includes agile consulting, continuous delivery, business analysis, software engineering, quality assurance, digital and business intelligence."
        ]}
      >
        <ServicesList>
          <Circle size="s" color="aqua" icon="team-augmentation">
            team augmentation
          </Circle>
          <Circle size="s" color="violet" icon="dedicated-teams">
            dedicated teams
          </Circle>
          <Circle size="m" color="red" icon="product-development" active={true}>
            product development
          </Circle>
          <Circle size="s" color="green" icon="project-based">
            project based
          </Circle>
        </ServicesList>
      </Section>
      <Section
        title="AGILE APPROACH"
        text={[
          "We take an agile approach to development – it’s our preferred methodology as it’s now the de-facto standard for global development teams. Company board directors are also increasingly knowledgeable about the agile delivery process, and we can help you manage their expectations as we move through product development process together.",
          "We provide expert engineers who deliver mission-critical projects so your customers’ requirements are being met right now. And by helping design, develop and deliver quality software products that your customers love using, we help you drive your business forward.",
          "Godel’s development teams have vast amounts of proven project success with delivery of mission-critical agile projects. Just ask us, or watch the case study below."
        ]}
        ears={true}
        blur="top"
        bgColor="aqua"
      />

      <Section width="full-with-ears" name="home-page-video">
        <Video
          image="http://img.youtube.com/vi/pQfZVWOpmx0/maxresdefault.jpg"
          videoId="pQfZVWOpmx0"
          text="The vision for Marketplace is simple. We wanted to make it easier for smaller car rental companies to engage with us so that we can offer our customers a broader selection of places to rent cars from."
          company="Rentalcars.com"
          author="Andy Thorburn"
          link="https://www.rentalcars.com/"
        />
      </Section>

      <Section
        width="half_position_right"
        name="video-footer"
        title="Rentalcars.com"
        bgColor="blue"
        button={
          <Button
            color="green"
            hover="trans"
            arrow="right"
            href="/case-study/rentalcars/"
          >
            See full case study
          </Button>
        }
      >
        <p>
          Rentalcars.com has collaborated with Godel to deliver a platform which
          enables smaller car rental suppliers to connect with Rentalcars.com's
          large customer base. Godel is working alongside Rentalcars.com's
          in-house development team as part of a ring-fenced resource, working
          as an augmented team to deliver the project.
        </p>
      </Section>

      <Section
        width="quarter_position_left"
        name="services"
        title="MORE FROM THIS SERVICE"
        text={[
          "If you’re looking for an expert development team to deliver a new software product to offer customers, then Godel can help, explore the categories of our comprehensive technical expertise."
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
          "Every client organisation is different and faces different business challenges and we tailor our service accordingly. But clients can expect that we:",
          "• Undertake an initial discovery phase to define your requirements in greater detail.",
          "• Help you build a business case, define budgets and timelines",
          "• Progress as fast as required to the foundation phase and into full-scale delivery",
          "• Provide you with a dedicated project manager or scrum master to keep you abreast of budgets and timelines",
          "• Work closely with your product owner and/or business stakeholders",
          "• Review delivery commitments and timescales in the agile delivery process inclusive of stand up’s, product backlog grooming, sprint planning and retrospectives.",
          "• Provide UK based account management, service delivery management and leadership.",
          "• Provide pre-formed delivery teams aligned with your required technology skills",
          "• Deliver quality market-disruptive technology"
        ]}
        title="PLAN FOR SUCCESS"
        width="half_position_left_img_infinite"
        bgPicture="collaboration"
      />

      <Section
        bgColor="blue"
        text={[
          "At Godel we have developed an on-boarding process which allows your Godel team members to build up knowledge of your systems, your business domain and your overall mission very quickly. Our ability to digest information is one of our family’s strengths, with this having been highlighted consistently within client feedback sessions.",
          "This knowledge transfer is done via a combination of workshops both onsite and remotely, utilising high definition video conferencing which is provided by Godel for free. This knowledge transfer process continues with your Godel team members taking part in your stand up’s, grooming and retrospective sessions together as a single team.",
          "We recognise it is of utmost importance that your Godel team members become part of your own in-house delivery team, rather than acting as a third party organisation. In doing this, it removes the barriers normally identified when trying to run distributed agile, which allows the joint ‘one team’ to focus on delivery.",
          "Teams are also brought together in a variety of softer ways. Softer elements such as ‘Release Parties’, ‘Team Bonding’ and team member visits to each location including lunchtime walks and picnics – all of which allow the communication gaps to be bridged to ensure that the team members build a positive relationship with each other.",
          "All of our locations work within UK core working hours which ensures that your in-house teams are engaging with team members who speak the same language, during the same working hours and face to face, which ensures smoother delivery and less surprises."
        ]}
        title="HOW DO WE EMBED OUR TEAM MEMBERS INTO YOUR TEAM?"
        width="half_position_right_img_infinite"
        bgPicture="agile"
      />
      <Section width="full" name="line" bgColor="aqua" />
    </main>
  );
}

export default ProductDevelopment;
