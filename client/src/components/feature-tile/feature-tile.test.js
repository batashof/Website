import React from "react";
import ReactDOM from "react-dom";
import FeatureTile from "./feature-tile";

describe("className", () => {
  it("returns correct class when props is not defined", () => {
    const featureTile = new FeatureTile({});
    expect(featureTile.defineClass()).toContain("FeatureTile");
  });
  it("returns correct class when props.height is defined", () => {
    const featureTile = new FeatureTile({ height: "260" });
    expect(featureTile.defineClass()).toContain("FeatureTile_height_260");
  });
  it("returns correct class when props.titlePosition is defined", () => {
    const featureTile = new FeatureTile({
      titlePosition: "bottom-right"
    });
    expect(featureTile.defineClass()).toContain(
      "FeatureTile_titlePosition_bottom-right"
    );
  });
  it("returns correct class when props.curtain is defined", () => {
    const featureTile = new FeatureTile({
      curtain: "crimson"
    });
    expect(featureTile.defineClass()).toContain("FeatureTile_curtain_crimson");
  });
  it("returns correct class when props.hoverEffect is defined", () => {
    const featureTile = new FeatureTile({
      hoverEffect: "fixed"
    });
    expect(featureTile.defineClass()).toContain(
      "FeatureTile_hoverEffect_fixed"
    );
  });
  it("returns correct class when props.active is defined", () => {
    const featureTile = new FeatureTile({
      logo: "logo.png"
    });
    expect(featureTile.defineClass()).toContain("FeatureTile_logo");
  });
  it("returns correct class when props.active is true", () => {
    const featureTile = new FeatureTile({
      textShadow: true
    });
    expect(featureTile.defineClass()).toContain("FeatureTile_text-shadow");
  });
});
