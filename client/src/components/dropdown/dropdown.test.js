import Dropdown from "./dropdown.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("dropdown", () => {
  it("renders without crashing", () => {
    const div = document.createElement("Router");
    ReactDOM.render(
      <Router>
        <Dropdown navItem="About Us" path="/about-us" />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("defineClassName", () => {
    it("returns correct class when size prop is xs", () => {
      const dropdown = new Dropdown({ size: "xs" });
      expect(dropdown.defineClassName()).toBe("Dropdown Dropdown_size_xs");
    });

    it("returns correct class when size prop is s", () => {
      const dropdown = new Dropdown({ size: "s" });
      expect(dropdown.defineClassName()).toBe("Dropdown Dropdown_size_s");
    });

    it("returns correct class when size prop is m", () => {
      const dropdown = new Dropdown({ size: "m" });
      expect(dropdown.defineClassName()).toBe("Dropdown Dropdown_size_m");
    });

    it("returns correct class when size prop is l", () => {
      const dropdown = new Dropdown({ size: "l" });
      expect(dropdown.defineClassName()).toBe("Dropdown Dropdown_size_l");
    });
  });
});
