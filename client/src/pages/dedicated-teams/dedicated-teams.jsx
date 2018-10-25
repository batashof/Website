import React from "react";
import "./dedicated-teams.css";

import {
  ServiceTile,
  List,
  Circle,
  ServicesList,
  Button,
  Video,
  Section
} from "../../components";

function DedicatedTeams() {
  return (
    <main>
      <Section
        title="DEDICATED TEAMS"
        name="top"
        border="bottom"
        text={[
          "Respected IT leaders have chosen Godel’s dedicated teams model for a number of compelling reasons. Building a nearshore capability to ease in-house recruitment, retention or knowledge retention are the most popular reasons, with the eagle-eyed leaders in the industry recognising that Belarus as a location, has established itself over the last decade as one of the leading tech talent capitals in Europe."
        ]}
      >
        <ServicesList>
          <Circle size="s" color="aqua" icon="team-augmentation">
            team augmentation
          </Circle>
          <Circle size="m" color="violet" icon="dedicated-teams" active={true}>
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
        title="SCALE. QUALITY. TRUST. AUTONOMOUS."
        text={[
          "Your IT leadership peers want access to the best talent available who can self-organise, deliver quality, build trust within their organisation and in the end, with guidance from their business and product owners, deliver in an autonomous manner. Managing spiralling costs in making this all happen is a fundamental consideration which is implemented on them by their business too.",
          "UK resources are expensive and the time spent managing these resources is time consuming and cumbersome. It also proves difficult due to availability to form delivery teams to start at the same time to ensure the mission is on-boarded and the project begins in the correct manner.",
          "The marketplace for IT skills talent in the UK is extremely competitive as organisations see technology advancement as a mechanism to outperform competitors. Battling for top-level talent also continues to fuel the inflated recruitment and salary costs in both the direct employment and contractor markets. Offers and counter offers are a daily occurrence with many IT leaders becoming frustrated or distracted with the whole process of securing talent.",
          "With the lack of talent available in the UK and the demand for delivery and resources becoming even more urgent, many of your IT peers are turning to Godel for help. Household names and respected technology companies in the UK continue to choose Godel and our dedicated team model to have the security of being able to access multi-skilled, highly performant, experienced, mature resource.",
          "Our highly performant team members possess vast expertise in agile consulting, continuous delivery, business analysis, software engineering, quality assurance, digital and business intelligence. Godel resources are chosen by IT leaders to enable their own teams to deliver faster, smarter with increased quality."
        ]}
        ears={true}
        blur="top"
        bgColor="aqua"
      />

      <Section width="full-with-ears" name="home-page-video">
        <Video
          image="http://img.youtube.com/vi/DcCKoP4Hxj0/maxresdefault.jpg"
          videoId="DcCKoP4Hxj0"
          text="We had concerns before we engaged. What would quality be like? How could we measure success? Very quickly we understood we were engaging with some very good development resource."
          company="Boden"
          author="David Petronzio"
          link="http://www.boden.co.uk/"
        />
      </Section>
      <Section
        width="half_position_right"
        name="video-footer"
        title="Boden"
        bgColor="blue"
        button={
          <Button
            shape="rect"
            color="green"
            hover="trans"
            arrow="right"
            href="/case-study/boden/"
          >
            See full case study
          </Button>
        }
      >
        <p>
          Discover the experience renowned British clothing retailer Boden have
          had since choosing Godel’s dedicated team model from David Petronzio,
          Head of Development.
        </p>
      </Section>

      <Section
        width="quarter_position_left"
        name="services"
        title="MORE FROM THIS SERVICE"
        text={[
          "The dedicated team approach provides a scalable flexible solution that can efficiently fill gaps of specialised skills. Explore the categories of our comprehensive technical expertise."
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
          "Our dedicated team offering is a tried and tested model which allows clients to source a pre-formed, managed team from Godel inclusive of a variety of roles, to embed into their organisation as a separate, permanent, cross functional delivery team which can take on the delivery of mission-critical projects and self manage them through to successful completion.",
          "The dedicated team normally comprises of a Business Analyst(s), Project Manager(s), Scrum Master, Developers and Quality Assurance which is brought together as a formed team and is empowered to deal directly with the business stakeholders / product owner and liaise with them on the definition and grooming of the product backlog, sprint planning and subsequent releases.",
          "Clients have chosen this model to leverage the right level of talent quickly within a pre-formed team to progress into a delivery plan, which can normally be established far more quickly than in-house internal recruitment teams can muster. In the long-term, the team is also far more cost effective than in-house recruitment too which goes towards helping them manage their department costs, without compromising quality."
        ]}
        title="WHAT IS A DEDICATED TEAM?"
        width="half_position_left_img_infinite"
        bgPicture="collaboration"
      />
      <Section
        bgColor="blue"
        text={[
          "Dedicated teams are put together with a number of elements considered. Skills, maturity, retention potential and culture are all considered by Godel when forming a strong team dedicated team.",
          "The management of the dedicated team is carried out in close collaboration with our clients, with clients heavily involved in identifying and meeting the most suitable team members put forward for their dedicated team.",
          "Once the team is in place and we have been through a successful on-boarding process, have understood the clients business and mission along with the timescales and requirements, we then look to define the metrics involved, with future reporting around team performance being aligned with this.",
          "As well as everyday stand up’s, regular reviews and retrospectives around status taking place in order to polish the delivery process and ensure there is clarity every step of the way, Godel’s leadership team are also involved to ensure that engagements are on track and that both the client and their Godel dedicated team continuous to identify ways of continuous improvement.",
          "Our approach to this has been honed over many years in working with clients and you can be sure that your dedicated team will feel empowered, measured and that there is a commitment to deliver your requirements with a high level of quality."
        ]}
        title="HOW IS MANAGEMENT OF THE DEDICATED TEAM HANDLED?"
        width="half_position_right_img_infinite"
        bgPicture="female-coder"
      />
      <Section width="full" name="line" bgColor="aqua" />
    </main>
  );
}

export default DedicatedTeams;
