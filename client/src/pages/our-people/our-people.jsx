import React, { Component } from "react";
import {
  Button,
  Circle,
  ServicesList,
  Section,
  CharitySection
} from "../../components";
import "./our-people.css";

export default class OurPeople extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="OUR PEOPLE &amp; CULTURE"
          name="top"
          border="bottom"
          text={[
            "At Godel we are renowned for our direct, no-nonsense attitude to delivery. Our purpose is to build the most respected nearshore software delivery partner in Europe. Maintaining our reputation for delivery quality is our number one priority as we continue to scale and build our company."
          ]}
        >
          <ServicesList>
            <Circle size="s" color="aqua" icon="meet-our-leaders">
              meet our leaders
            </Circle>
            <Circle size="s" color="green" icon="godel-dna">
              godel dna
            </Circle>
            <Circle size="s" color="red" icon="our-skills">
              our skills
            </Circle>
          </ServicesList>
        </Section>

        <Section
          text={[
            "Your project is mission-critical, your timelines are tight and so is the budget. We take your business needs very seriously and are very selective about the engagements we take on.",
            "Being selective allows us to ensure that we do not over commit ourselves, which allows IT leaders to be safe in the knowledge that if we say we can – we will. Similarly, when introducing talent into the Godel family, we ensure that rigorous checks are carried out into personality, skills, maturity and initiative to ensure that our clients are able to leverage the very best talent available on the market.",
            "With a focus on delivering quality over revenue, team members play a significant part in shaping the company’s growth and are offered the opportunity to feedback and put forward ideas on areas around delivery improvement, client retention, growth and technology ideas."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />

        <Section
          text={[
            "Being selective allows us to ensure that we do not over commit ourselves, which allows IT leaders to be safe in the knowledge that if we say we can – we will."
          ]}
          width="full"
          name="quotes"
        />
        <Section
          bgColor="blue"
          text={[
            "Each engagement is different but there are fundamental steps taken when bringing together different teams to deliver a mission. Engagements with a partner usually go through a Forming, Storming, Norming, Performing process, however, with our unique approach to on-boarding, we have identified and polished a process which can bring together cross-functional teams together, quicker, without compromising quality.",
            "We recognise the importance of building strong relationships between teams and that this takes shape in many ways, being involved in the same stand-up’s, shared collaboration of your existing development tools, high definition video conferencing equipment being installed to open up communication by Godel for free, as well as the softer side of team collaboration such as release parties, “mission” workshops, trips to Belarus and more!"
          ]}
          title="EMBEDDING TEAMS"
          width="half_position_right_img_infinite"
          bgPicture="interview"
        />
        <Section
          bgColor="green"
          text={[
            "IT leaders are not cats. They do not get nine lives unfortunately so the IT leaders who have chosen to work with us do so on the basis of being able to sleep at night and similarly to Godel, because they want to maintain their own reputation for delivery.",
            "Talented people also want to ensure that they are working for a company who care most about delivery quality. A company which engages with serious organisations to deliver serious mission critical projects. In holding this as our Godel family purpose, it allows us to bring exciting clients to the company with exciting projects, as well as being able to recruit and retain the best of the best in terms of software development and quality assurance talent.",
            "Our delivery model is widely respected within the industry, having assisted industry leaders such as First:Utility, Think Money, Hitachi, LateRooms.com, AO.com, Trainline and many others with major software development projects.",
            "If we say we can – we will."
          ]}
          title="WHY GODEL?"
          width="half_position_left_img_infinite"
          bgPicture="hr"
          button={
            <Button
              color="blue"
              shape="rect"
              hover="blue"
              icon="blueArrow"
              href="/our-delivery-process/"
            >
              Our delivery process
            </Button>
          }
        />
        <Section width="full" name="line" bgColor="aqua" />
        <CharitySection />
      </main>
    );
  }
}
