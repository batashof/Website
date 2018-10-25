import React from "react";
import {
  Layout,
  AboutUsGrid,
  Button,
  ServiceTile,
  List,
  Video,
  CharitySection
} from "../../components/";
import "./about-us.css";

function AboutUs() {
  return (
    <main>
      <Layout
        width="full"
        title="About us"
        text={[
          "Welcome to Godel Technologies. With offices in Manchester and London we are a leading agile software development expert, combining our unique agile delivery approach with some of the most exceptional software development and quality assurance talent in Europe."
        ]}
        name="about-us-promo"
      >
        <AboutUsGrid />
      </Layout>

      <Layout
        width="full"
        text={[
          "Here at Godel, we are renowned for our direct, no-nonsense attitude to delivery and this successful approach has enabled us to build our business on the basis of positive referrals from our clients.",
          "Our culture has been honed since the company’s inception. Having fun, whilst delivering high quality software development is a principle installed into every single member of the Godel team. We retain outstanding talent, make working fun and bring our clients the benefit of working with a highly skilled, happy and exceptional delivery team."
        ]}
        name="about-us-mission"
        button={
          <Button
            shape="rect"
            color="green"
            hover="trans"
            arrow="right"
            href="/our-mission"
          >
            Our mission
          </Button>
        }
      />

      <Layout width="full-with-ears" name="home-page-video">
        <Video
          image="http://img.youtube.com/vi/IKtMHlAX644/maxresdefault.jpg"
          videoId="IKtMHlAX644"
          text="We wanted to develop additional experience with a nearshore partner, Godel were a good choice for us and and we felt confident that we could bring them in and work with them effectively."
          company="Trainline"
          author="by Mark Holt"
          link="https://www.thetrainline.com/"
        />
      </Layout>

      <Layout
        width="half_position_right_img_infinite"
        name="about-us-establishing"
        title="ESTABLISHING TRUST"
        text={[
          "Trust is a key factor when partnering with any software development company. Understanding the status of a requirement, user story, ticket, phase or project is key to in order to demonstrate knowledge and experience and ensure that the business need is actually resolved.",
          "Building on our philosophy of frequent communication in agile delivery, we take care to ensure that requirements are understood at the first time of asking and delivered to the quality our clients expect.",
          "No two engagements are ever the same. Different technologies, different cultures and different constraints will all drive how the delivery process works. With 15 years’ experience engaging with organisations in many different scenarios, we have the ability to adapt our model to partner successfully with your business.",
          "Whether your process is scrum, kanban or another methodology; whether continuous integration is your standard mode of operation or it’s a combination of all of the above, there are a number of factors that are taken into consideration when our recommendations are made. This enables us to tailor solutions to fit into our clients needs and environments."
        ]}
      />

      <Layout
        width="quarter_position_left"
        name="about-us-delivery"
        title="OUR DELIVERY PROCESS"
        text={[
          "Using some of the most exceptional talent in Europe fronted by UK based account and service delivery management, our dynamic, flexible, no-nonsense and honest approach sees clients choosing to work with Godel in mission-critical delivery."
        ]}
        button={
          <Button
            color="green"
            shape="rect"
            hover="trans"
            arrow="right"
            href="/our-delivery-process/"
          >
            Explore our Approach
          </Button>
        }
      >
        <List layout="with-grid-and-border" name="features">
          <ServiceTile division="development" />
          <ServiceTile division="qa" />
          <ServiceTile division="cloud" />
          <ServiceTile division="digital" />
          <ServiceTile division="bi" />
          <ServiceTile division="devops" />
          <ServiceTile division="agile" />
        </List>
      </Layout>

      <Layout
        width="full"
        name="about-us-management"
        title="COME AND MEET OUR MANAGEMENT TEAM AND SOME OF THE FACES BEHIND GODEL"
        button={
          <Button
            shape="rect"
            color="green"
            hover="trans"
            arrow="right"
            href="/our-leaders"
          >
            Meet our leaders
          </Button>
        }
      />
      <CharitySection />
    </main>
  );
}

export default AboutUs;
