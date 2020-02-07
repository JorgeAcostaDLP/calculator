import React from "react";
import ReactDOM from "react-dom";
import Display from "./Display";

//renders component correctly
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Display />, div);
});

it("displays proper prop", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Display value={"PropTest"} />, div);
  const divToTest = div.querySelector(".component-display");
  expect(divToTest.childNodes[0].innerHTML).toBe("PropTest");
});

it("displays null as default", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Display />, div);
  const divToTest = div.querySelector(".component-display");
  expect(divToTest.childNodes[0].innerHTML).toBe("");
});
