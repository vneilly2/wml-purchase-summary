import React, { Component } from "react";
import "./App.css";
import SummaryWrapper from "../HOC/SummaryWrapper";
import PurchaseSummary from "./PurchaseSummary";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Purchase Summary</h1>
        </header>
        <PurchaseSummary />
      </div>
    );
  }
}

export default App;
