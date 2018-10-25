import React from "react";
import { storiesOf } from "@storybook/react";
import FeatureTile from "./feature-tile";

storiesOf("FeatureTile", module)
  .add("default", () => <FeatureTile />)
  .add(
    "height ='260' hoverEffect='slide-top' titlePosition='top-right' textPosition='top-right-bellow-title' hoverEffect='slide-top'",
    () => (
      <FeatureTile
        height="260"
        hoverEffect="slide-top"
        titlePosition="top-right"
        textPosition="top-right-bellow-title"
        curtain="blue"
        title="some title"
      >
        Our mission is to become the most respected nearshore software delivery
        partner in Europe, championing quality over revenue, recruiting and
        retaining the 'best of the best', and by doing software
        development...properly.{" "}
      </FeatureTile>
    )
  )
  .add(
    "height ='260' hoverEffect='fixed' titlePosition='top-left' textPosition='top-left-bellow-title' ",
    () => (
      <FeatureTile
        height="260"
        hoverEffect="fixed"
        titlePosition="top-left"
        textPosition="top-left-bellow-title"
        title="some title"
      >
        Our mission is to become the most respected nearshore software delivery
        partner in Europe, championing quality over revenue, recruiting and
        retaining the 'best of the best', and by doing software
        development...properly.{" "}
      </FeatureTile>
    )
  )

  .add(
    "height ='450' bgPicture=discussion curtain='violet' titlePosition='bottom-left' textPosition='top-right'",
    () => (
      <FeatureTile
        height="450"
        bgPicture="discussion"
        curtain="violet"
        titlePosition="bottom-left"
        textPosition="top-right"
        title="some title"
      >
        Our mission is to become the most respected nearshore software delivery
        partner in Europe, championing quality over revenue, recruiting and
        retaining the 'best of the best', and by doing software
        development...properly.{" "}
      </FeatureTile>
    )
  )
  .add(
    'titlePosition="bottom-left" textPosition="top-right"  curtain="green"  bgPicture="discussion"  height="300"  img="the-people"  title="Team Augmentation"',
    () => (
      <div>
        <FeatureTile
          textPosition="bottom-right"
          titlePosition="top-right"
          curtain="green"
          bgPicture="discussion"
          height="300"
          img="none"
          title="Team Augmentation"
          logo="jet2-logo.png"
          title="some title"
          textShadow={true}
        >
          Cloud migration drivers Trainline's rapid 900-fold improvement in
          agility.{" "}
        </FeatureTile>
        <div>
          textPosition="bottom-right" titlePosition="top-right" curtain="green"
          bgPicture="discussion" height="300" img="none" title="Team
          Augmentation" logo="jet2-logo.png"
        </div>
      </div>
    )
  );
