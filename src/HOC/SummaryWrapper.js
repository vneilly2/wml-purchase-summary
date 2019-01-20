import React, { Component } from "react";
import { products } from "../data/Data";

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
            <WrappedComponent
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

export default summaryWrapper;
