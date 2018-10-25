import React from "react";
import ReactDOM from "react-dom";
import ServicesList from "./serviceslist.jsx";

describe("ServicesList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ServicesList>
        <div />
        <div />
        <div />
      </ServicesList>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("ServicesList", () => {
    it('returns correct class when legs prop is "true"', () => {
      const servicesList = new ServicesList({
        legs: true
      });
      expect(servicesList.existLegs()).toBe("ServicesList__legs ");
    });
    it('returns correct class when legs prop is "false"', () => {
      const servicesList = new ServicesList({
        legs: false
      });
      expect(servicesList.existLegs()).toBe("ServicesList__legs LegsOff");
    });
  });
});
