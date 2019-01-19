import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import PurchaseSummary from "../Components/PurchaseSummary";

describe("PurchaseSummary", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<PurchaseSummary />)));
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
