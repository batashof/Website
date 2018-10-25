import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import ReactSVG from "react-svg";
import arrowLeft from "./button-icons/arrow-left";

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  describe("buildClass", () => {
    describe("returns correct class with color", () => {
      it("returns correct className ", () => {
        const button = new Button({ color: "green" });
        const className = button.buildClass();
        expect(className).toMatch("Button_color_green");
        expect(className).not.toMatch("Button_hover_none");
      });
      it("returns correct className ", () => {
        const button = new Button({ color: "blue" });
        const className = button.buildClass();
        expect(className).toMatch("Button_color_blue");
        expect(className).not.toMatch("Button_hover_green");
      });
      it("returns correct className ", () => {
        const button = new Button({ color: "none" });
        const className = button.buildClass();
        expect(className).toMatch("Button_color_none");
        expect(className).not.toMatch("Button_hover_trans");
      });
    });

    describe("returns correct class with hover", () => {
      it("returns correct className ", () => {
        const button = new Button({ hover: "green" });
        const className = button.buildClass();
        expect(className).toMatch("Button_hover_green");
        expect(className).not.toMatch("Button_shape_square");
      });
      it("returns correct className ", () => {
        const button = new Button({ hover: "trans" });
        const className = button.buildClass();
        expect(className).toMatch("Button_hover_trans");
        expect(className).not.toMatch("Button_shape_none");
      });
      it("returns correct className ", () => {
        const button = new Button({ hover: "none" });
        const className = button.buildClass();
        expect(className).toMatch("Button_hover_none");
        expect(className).not.toMatch("Button_shape_rect");
      });

      describe("returns correct class with shape", () => {
        it("returns correct className ", () => {
          const button = new Button({ shape: "rect" });
          const className = button.buildClass();
          expect(className).toMatch("Button_shape_rect");
          expect(className).not.toMatch("Button_color_none");
        });
        it("returns correct className ", () => {
          const button = new Button({ shape: "square" });
          const className = button.buildClass();
          expect(className).toMatch("Button_shape_square");
          expect(className).not.toMatch("Button_color_blue");
        });
        it("returns correct className ", () => {
          const button = new Button({ shape: "none" });
          const className = button.buildClass();
          expect(className).toMatch("Button_shape_none");
          expect(className).not.toMatch("Button_color_green");
        });
      });
    });
  });

  describe("defineIcon", () => {
    it("returns correct icon ", () => {
      const button = new Button({ icon: "play" });
      expect(button.defineIcon()).toEqual(<ReactSVG path="/icons/play.svg" />);
    });

    it("returns correct icon ", () => {
      const button = new Button({});
      expect(button.defineIcon()).toEqual();
    });
  });

  describe("iconAfter", () => {
    it("returns correct pos ", () => {
      const button = new Button({ pos: "afterText" });
      global.spyOn(button, "defineIcon");
      button.iconAfter();
      expect(button.defineIcon).toHaveBeenCalled();
    });
  });

  describe("iconBefore", () => {
    it("returns correct pos ", () => {
      const button = new Button({ pos: "beforeText" });
      global.spyOn(button, "defineIcon");
      button.iconBefore();
      expect(button.defineIcon).toHaveBeenCalled();
    });
  });

  describe("defineArrow", () => {
    it("returns correct arrow when 'arrow' prop is 'left'", () => {
      const button = new Button({ arrow: "left" });
      expect(button.defineArrow()).toEqual(arrowLeft);
    });

    it("returns correct arrow when 'arrow' prop is 'none'", () => {
      const button = new Button({ arrow: "none" });
      expect(button.defineArrow()).not.toBeDefined();
    });
  });
});
