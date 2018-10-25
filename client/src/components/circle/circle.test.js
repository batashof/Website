import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './circle.jsx';

describe("Circle", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Circle>Children</Circle>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("className", () => {
    it("returns correct class when props is not defined", () => {
      const circle = new Circle({});
      expect(circle.defineClass()).toContain("Circle ");
    });
    it("returns correct class when props.color is defined", () => {
      const circle = new Circle({ color: "green" });
      expect(circle.defineClass()).toContain("Circle_color_green");
    });
    it("returns correct class when props.size is defined", () => {
      const circle = new Circle({ size: "s" });
      expect(circle.defineClass()).toContain("Circle_size_s");
    });
    it("returns correct class when props.icon is defined", () => {
      const circle = new Circle({ icon: "our-skills" });
      expect(circle.defineClass()).toContain("Circle_icon_our-skills");
    });
    it("returns correct class when props.active is true", () => {
      const circle = new Circle({ active: true });
      expect(circle.defineClass()).toContain("Circle_active");
    });
  });
});
