import React, { Component } from "react";

class PurchaseSummary extends Component {
  render() {
    let { toggleShowDetails, toggleApplyPromo, price } = this.props;
    return (
      <div className="purchase-summary-container">
        <div className="subtotal">
          <p className="price">
            <span>Subtotal: </span>
            {price}
          </p>
        </div>
      </div>
    );
  }
}

export default PurchaseSummary;
