import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Navbar from "./Navbar";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});

const setUp = (props = {}) => {
  const component = shallow(<Navbar {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = component.find(".nav-wrapper");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a Link", () => {
    const link = component.find("#nav-mobile");
    expect(link.length).toBe(1);
  });
});
