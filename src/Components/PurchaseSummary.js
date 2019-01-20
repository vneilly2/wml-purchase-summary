import React from "react";
import SummaryWrapper from "../HOC/SummaryWrapper";
const PurchaseSummary = props => {
  let { toggleShowDetails, toggleApplyPromo, price } = props;
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
};

export default SummaryWrapper(PurchaseSummary);
