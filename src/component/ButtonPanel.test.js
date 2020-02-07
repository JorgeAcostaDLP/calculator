import React from "react";
import ReactDOM from "react-dom";
import ButtonPanel from "./ButtonPanel";

//renders component correctly
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ButtonPanel />, div);
});

it("has 19 buttons", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ButtonPanel />, div);
  const buttons = div.querySelectorAll("button");
  expect(buttons.length).toBe(19);
});
