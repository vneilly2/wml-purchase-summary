import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../Components/App";
import PurchaseSummary from "./PurchaseSummary";
import { wrap } from "module";

describe("App", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render Purchase Summary component", () => {
    expect(wrapper.containsMatchingElement(<PurchaseSummary />)).toEqual(true);
  });
});
