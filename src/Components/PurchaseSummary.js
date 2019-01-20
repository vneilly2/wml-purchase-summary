import React from "react";
import SummaryWrapper from "../HOC/SummaryWrapper";
import ToolTip from "../Components/ToolTip";

const PurchaseSummary = props => {
  console.log(props);
  let { price, savings } = props;
  return (
    <div className="purchase-summary-container">
      <div className="subtotal">
        <ul className="price">
          <li>
            <span>Subtotal:</span>
          </li>
          <li>{price}</li>
        </ul>
      </div>
      <div className="pup-savings">
        <ul className="savings">
          <li>
            <ToolTip
              message={"Picking up your order in the store helps"}
              position={"bottom"}
            >
              Pickup Savings
            </ToolTip>
          </li>
          <li>{savings}</li>
        </ul>
      </div>
    </div>
  );
};

export default SummaryWrapper(PurchaseSummary);
