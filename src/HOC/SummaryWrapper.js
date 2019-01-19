import React, { Component } from "react";
import ReactDom from "react-dom";
import Data from "../data/Data";
import PurchaseSummary from "../Components/PurchaseSummary";

const summaryWrapper = props => {
  return (
    <div>
      <PurchaseSummary data={Data.products} />
    </div>
  );
};

export default summaryWrapper;
