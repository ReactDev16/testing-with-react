import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../Utils";
import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

// this function is importing from utils
// const findByTestAttr = (component, attr) => {
//   const wrapper = component.find(`[data-test='${attr}']`);
//   return wrapper;
// };

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render with out errors", () => {
    // const component = setUp(); --> because of beforeEach
    // const wrapper = component.find(`[data-test='header-component']`);
    const wrapper = findByTestAttr(component, "header-component");
    expect(wrapper.length).toBe(1);
  });

  it("Shoud render a logo", () => {
    // const component = setUp(); because of beforeEach
    // const logo = component.find(`[data-test='logo-img']`);
    const logo = findByTestAttr(component, "logo-img");
    expect(logo.length).toBe(1);
  });
});
