import React, { Component } from "react";
import { ServiceTile, List, Section } from "../../components";
import "./business-intelligence.css";

export default class BusinessIntelligence extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="BUSINESS INTELLIGENCE"
          name="top"
          border="bottom"
          text={[
            "As the competition for survival tightens its crucial to enable yourself to be able to eliminate waste and to be able to make more informed strategic decisions which can be done using a Business Intelligence solution."
          ]}
        />
        <Section
          text={[
            "If you want to forecast faster and more accurately, gain insights into your customers’ behaviour, shorten process cycle times, improve data integrity and quality or extract data from multiple sources across the business, you’ve come to the right place. Godel provides industry leaders with expert BI technology consultants that can help cross multiple BI platforms and technologies and we have the skills to help get the most from your data to make it work for your business."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />
        <Section
          bgColor="green"
          text={[
            "Industry leaders in big data, retail and health analytics, customer behaviour intelligence and more have regularly white-labelled our consultants to deliver disruptive BI products to market. Our teams are organised around the Microsoft, Java, and PHP stack of languages and associated technologies, and have helped organisations develop BI software tools and leading BI platforms.",
            "See news of our latest project here."
          ]}
          width="half_position_left_img_infinite"
          bgPicture="BI"
        />
        <Section
          bgColor="blue"
          text={[
            "Our methodology is tailored to the status of each project we encounter and upon engagement, our QA division will utilise a comprehensive set of metrics to evaluate various quality aspects not only the quality of the final product but also the quality of the whole process undertaken to deliver the end result.",
            "Our approach addresses requirements, regression functional and non-functional testing and we also specialise in automated testing to improve speed and reliability whilst reducing the overall cost of repeatable testing requirements.",
            "At Godel we understand the challenges facing your organisation, both in the actual QA process and also in your budget limitations. In order to address those needs we have developed a number of approaches that add value to the process whilst supporting organisations with their vital testing requirements.",
            "One of our clients First Utility reported that a collaboration with Godel on test automation recently saved them £750,000 per annum. For further information on this, please visit: http://www.www.godeltech.com/firstutility",
            "If you would like to talk to us about enhancing your QA offering or to engage Godel on a QA review please contact us on 0161 219 8100"
          ]}
          width="half_position_right_img_infinite"
          bgPicture="consultant"
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
