import React, { Component } from "react";
import ReactDom from "react-dom";
import { products } from "../data/Data";
import PurchaseSummary from "../Components/PurchaseSummary";

const summaryWrapper = WrappedComponent => {
  class SummaryWrapper extends Component {
    constructor(props) {
      super(props);

      this.state = {
        showItemDetails: false,
        showApplyPromo: false
      };

      this.handleToggleShow = this.handleToggleShow.bind(this);
    }
    handleToggleShow(e) {}
    render() {
      return (
        <div>
          {products.map(product => (
            <PurchaseSummary
              key={product.id}
              price={product.price}
              name={product.name}
              colors={product.colors}
            />
          ))}
        </div>
      );
    }
  }
  return SummaryWrapper;
};
