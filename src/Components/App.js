import React, { Component } from "react";
import PurchaseSummary from "./PurchaseSummary";
import "./App.css";
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
