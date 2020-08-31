import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  renderMyStocks = () => {
    return this.props.myStocks.map((stock) => (
      <Stock
        key={stock.id}
        stock={stock}
        toggleBuyOrSell={this.props.toggleBuyOrSell}
      />
    ));
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderMyStocks()}
      </div>
    );
  }
}

export default PortfolioContainer;
