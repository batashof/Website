import React, { Component } from "react";
import { ServiceTile, List, Section } from "../../components";
import "./digital-transformation.css";

export default class DigitalTransformation extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="DIGITAL TRANSFORMATION"
          name="top"
          border="bottom"
          text={[
            "Developing great software is only part of the solution. It’s imperative that customer engagement and user journey definition is incorporated into the planning and discovery stages of the build of products and applications."
          ]}
        />
        <Section
          title="DISCOVERY"
          text={[
            "Whether you’re already on the path to digital transformation or you need help to start the process, Godel provides the knowledge and skills to help you."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />
        <Section
          bgColor="green"
          title="DIGITAL TRANSFORMATION"
          text={[
            "Customer expectations have shifted drastically within the digital landscape – wanting more and demanding it faster than ever before. Many organisations are falling short of these customer expectations and must work to deliver a digital strategy to meet millennial demands.",
            "At Godel we constantly analyse your customers’ journey so that we can identify ways to help you improve it and maintain your competitive edge. Digitisation is fundamental to any organisation’s future – no matter how old or in what sector – and the cloud is central to that strategy.",
            "We are cloud experts.",
            "To see how we’ve helped other organisations, visit our customer case studies:"
          ]}
          width="half_position_left_img_infinite"
          bgPicture="store"
          button={
            <ul>
              <li>Experian</li>
              <li>Rentalcars.com</li>
              <li>Virgin Holiday's</li>
            </ul>
          }
        />
        <Section
          bgColor="blue"
          title="ENHANCE YOUR CAPABILITY"
          text={[
            "You may have products, applications or platforms that are 9/10ths of the way there, but needs finessing. You may want to start with a blank sheet of paper and create a new product for a new market, or you may simply be trying to fathom which interesting idea or trend is the one to focus on.",
            "Whatever your development requirements, we can help put it into context and deliver it to your customers, fast. Creativity and speed is key to building your business and being first to market.",
            "Our front-end, full stack and mobile developers have the experience to consult with you and deliver software that meets yours and your customers’ requirements, ultimately helping to increase your customer numbers and enhance their satisfaction."
          ]}
          width="half_position_right_img_infinite"
          bgPicture="team"
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
