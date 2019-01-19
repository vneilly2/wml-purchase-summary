import React, { Component } from "react";

class PurchaseSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetailsOpen: false,
      applyPromoOpen: false
    };
  }
  render() {
    let { toggleShowDetails, toggleApplyPromo, data } = this.props;
    const test = data.map(product => (
      <div className="purchase-summary-container" keys={product.id}>
        <div className="subtotal">
          <p className="price">
            <span>Subtotal: </span>
            {product.price}
          </p>
        </div>
      </div>
    ));
    console.log(data, "currentData");
    return <div>{test}</div>;
  }
}

export default PurchaseSummary;
