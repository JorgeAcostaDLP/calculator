import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const divy = document.createElement("div");
//renders component correctly
it("renders without crashing", () => {
  ReactDOM.render(<Button />, divy);
});

//checks default classes
it("Button has correct default classes", () => {
  ReactDOM.render(<Button name="Test" orange={true} />, divy);
  const buttonTest = divy.querySelector(".component-button");
  expect(Array.from(buttonTest.classList)).toEqual(
    expect.arrayContaining(["component-button"]),
  );
});

//checks classList once props are added
it("Button adds correct classes when props are passed in", () => {
  ReactDOM.render(<Button name="Test2" orange={true} wide={true} />, divy);
  const buttonTest2 = divy.querySelector(".component-button");
  expect(Array.from(buttonTest2.classList)).toStrictEqual([
    "component-button",
    "orange",
    "wide",
  ]);
});

//checks handleClick is called when button is clicked
configure({ adapter: new Adapter() });
it("Calls handleClick", () => {
  const handleClickFunction = jest.fn();
  const buttonToTest = shallow(
    <Button name="Test" clickHandler={handleClickFunction} />,
  );
  buttonToTest.find("button").simulate("click");
  expect(handleClickFunction).toHaveBeenCalled();
});
