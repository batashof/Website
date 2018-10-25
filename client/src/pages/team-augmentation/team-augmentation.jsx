import React from "react";
import "./team-augmentation.css";

import {
  ServiceTile,
  List,
  Circle,
  ServicesList,
  Button,
  Video,
  Section,
  Layout
} from "../../components";

function TeamAugmentation() {
  return (
    <main>
      <Section
        title="TEAM AUGMENTATION"
        name="top"
        border="bottom"
        text={[
          "Your IT leadership peers have turned to Godel for a number of reasons. It could be they had an exceptional in-house team and were struggling to recruit the right level of resource, the demand from their business far outweighed their ability to scale and deliver or they needed a proven model to help them with peaks and troughs of demand."
        ]}
      >
        <ServicesList>
          <Circle size="m" color="aqua" icon="team-augmentation" active={true}>
            team augmentation
          </Circle>
          <Circle size="s" color="violet" icon="dedicated-teams">
            dedicated teams
          </Circle>
          <Circle size="s" color="red" icon="product-development">
            product development
          </Circle>
          <Circle size="s" color="green" icon="project-based">
            project based
          </Circle>
        </ServicesList>
      </Section>
      <Section
        title="SOURCING TALENT"
        text={[
          "The marketplace for IT skills talent in the UK is extremely competitive as organisations see technology advancement as a mechanism to outperform competitors. Battling for top-level talent also continues to fuel the inflated recruitment and salary costs in both the direct employment and contractor markets. Offers and counter offers are a daily occurrence with many IT leaders becoming frustrated or distracted with the whole process of securing talent.",
          "With the lack of talent available in the UK and the demand for delivery and resources becoming even more urgent, many of your IT peers are turning to Godel for help. Household names and respected technology companies in the UK continue to choose Godel and our team augmentation model to have the security of being able to access multi-skilled, highly performant, experienced, mature resource.",
          "Our team augmentation offering is a tried and tested model which allows clients to supplement their existing in-house teams with skilled resources from Godel. Our highly performant team members possess vast expertise in agile consulting, continuous delivery, business analysis, software engineering, quality assurance, digital and business intelligence.",
          "Team members are embedded into your own in-house teams with individuals having been through a rigorous recruitment and training process in order to prove themselves capable of working alongside your team.",
          "Godel resources are chosen by IT leaders to enable their own teams to deliver faster, smarter with increased quality."
        ]}
        ears={true}
        blur="top"
        bgColor="aqua"
      />

      <Layout width="full-with-ears">
        <Video
          image="http://img.youtube.com/vi/IKtMHlAX644/maxresdefault.jpg"
          videoId="IKtMHlAX644"
          text="We wanted to develop additional experience with a nearshore partner, Godel were a good choice for us and and we felt confident that we could bring them in and work with them effectively."
          company="Trainline"
          author="Mark Holt"
          link="https://www.thetrainline.com/"
        />
      </Layout>
      <Section
        width="half_position_right"
        name="video-footer"
        title="Trainline"
        bgColor="blue"
        button={
          <Button
            shape="rect"
            color="green"
            hover="trans"
            arrow="right"
            href="/case-study/trainline/"
          >
            See full case study
          </Button>
        }
      >
        <p>
          Trainline’s search for talent led them towards Godel to augment their
          own in-house resources to deliver on their mission to the Cloud. Hear
          more about our exciting journey with Mark’s team at Trainline.
        </p>
      </Section>

      <Section
        width="quarter_position_left"
        name="services"
        title="MORE FROM THIS SERVICE"
        text={[
          "The augmented team approach allows for a flexible variety of technical disciplines within a single team. Explore the categories of our comprehensive technical expertise. you"
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
          "At Godel we have developed an on-boarding process which allows your Godel team members to build up knowledge of your systems, your business domain and your overall mission very quickly. Our ability to digest information is one of our family’s strengths, with this having been highlighted consistently within client feedback sessions.",
          "This knowledge transfer is done via a combination of workshops both onsite and remotely, utilising high definition video conferencing which is provided by Godel for free. This knowledge transfer process continues with your Godel team members taking part in your stand up’s, grooming and retrospective sessions together as a single team.",
          "We recognise it is of utmost importance that your Godel team members become part of your own in-house delivery team, rather than acting as a third party organisation. In doing this, it removes the barriers normally identified when trying to run distributed agile, which allows the joint ‘one team’ to focus on delivery.",
          "Teams are also brought together in a variety of softer ways. Softer elements such as ‘Release Parties’, ‘Team Bonding’ and team member visits to each location including lunchtime walks and picnics – all of which allow the communication gaps to be bridged to ensure that the team members build a positive relationship with each other.",
          "All of our locations work within UK core working hours which ensures that your in-house teams are engaging with team members who speak the same language, during the same working hours and face to face, which ensures smoother delivery and less surprises."
        ]}
        title="HOW DO WE EMBED OUR TEAM MEMBERS INTO YOUR TEAM?"
        width="half_position_left_img_infinite"
        bgPicture="collaboration"
      />
      <Section
        bgColor="blue"
        text={[
          "The management of the team members is done in collaboration with our clients in order to ensure both parties look to build an overall “one team” view.",
          "Once we have been through a successful on-boarding process and we have defined the metrics involved in the measurement of teams, our team in conjunction with our leadership team are fully focused and accountable for the measurement and management of performance and retention.",
          "As well everyday stand up’s, regular reviews and retrospectives around performance take place in order to polish the delivery process and ensure there is clarity every step of the way. Reporting is also set in place to ensure that there is visibility around delivery and performance.",
          "Our approach to this has been honed over many years in working with clients and you can be sure that your team members will feel empowered, measured and that there is a commitment to deliver the level of quality and the bar you set of your own in-house team members.",
          "Godel team members can fully adapt to your existing in-house process and usage of tools (Microsoft TFS, JIRA, Slack etc) in order to ensure that the process of introducing our team members is as seamless as possible for your own team."
        ]}
        title="HOW IS MANAGEMENT OF THE TEAM MEMBERS HANDLED?"
        width="half_position_right_img_infinite"
        bgPicture="female-coder"
      />
      <Section width="full" name="line" bgColor="aqua" />
    </main>
  );
}

export default TeamAugmentation;
