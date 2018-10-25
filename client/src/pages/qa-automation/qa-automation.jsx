import React, { Component } from "react";
import { ServiceTile, List, Section } from "../../components";
import "./qa-automation.css";

export default class QaAutomation extends Component {
  render() {
    return (
      <main>
        <Section
          width="full"
          title="QA / AUTOMATION"
          name="top"
          border="bottom"
          text={[
            "Our team cover a wide spectrum of manual and automated testing from functionality testing, regression testing, to load and performance testing."
          ]}
        />
        <Section
          text={[
            "It is not uncommon for organisations to treat Quality Assurance and Testing as the poor relation in the software development process. There are many reasons for this, including the process not being fully understood by the board of the organisation (who may subsequently be unwilling to sign off additional investment) or even sometimes by the software development team who may believe that they have all testing handled through internal Test Driven Development (TDD).",
            "There are other approaches which can assist you in the rapid delivery and release of software, however we believe a ‘belt and braces’ approach greatly increases your chance of achieving a successful release first time and mitigates the risk of letting your clients down: something no organisation can afford to do."
          ]}
          width="full"
          ears={true}
          blur="top"
          bgColor="aqua"
        />
        <Section
          bgColor="green"
          text={[
            "Godel’s quality assurance division houses exceptional talent who are passionate about verifying and validating the functionality of each and every project to ensure successful software delivery that is aligned with your business objectives.",
            "Our experts are ISTQB Accredited and hold vast experience in utilising the leading testing tools, whilst leveraging our proven QA methodology, enabling clients to obtain a smarter, more efficient approach to testing.",
            "Encompassing continuous integration and continuous deployment methodologies and tools, our talented staff are able to work within your in-house teams or as a external test consultancy to engage with you to enable faster releases of software or product updates."
          ]}
          width="half_position_left_img_infinite"
          bgPicture="quality"
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
          bgPicture="methodology"
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
