import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    myStocks: [],
  };

  componentDidMount() {
    this.fetchStocks();
  }

  fetchStocks = () => {
    fetch("http://localhost:3000/stocks")
      .then((response) => response.json())
      .then((stocks) => {
        this.allStocks = stocks;

        this.setState({ stocks });
      });
  };

  toggleBuyOrSell = (stock) => {
    if (this.state.myStocks.includes(stock)) {
      this.sellStock(stock);
    } else {
      this.buyStock(stock);
    }
  };

  buyStock = (stock) => {
    const myStocks = [...this.state.myStocks, stock];
    this.setState({ myStocks });
  };

  sellStock = (stock) => {
    const myStocks = this.state.myStocks.filter((s) => s.id !== stock.id);
    this.setState({ myStocks });
  };

  filterStocks = (type) => {
    // update this.state.stocks based on filter input
    const stocks = this.allStocks.filter((s) => s.type === type);
    this.setState({ stocks });
  };

  sortStocks = (criteria) => {
    // allows user to sort stocks either by Alphabetical or by Price

    criteria = criteria === "Alphabetically" ? "name" : "price";

    const stocks = [...this.state.stocks].sort((stockA, stockB) => {
      if (stockA[criteria] < stockB[criteria]) {
        return -1;
      }
      if (stockA[criteria] > stockB[criteria]) {
        return 1;
      }
      return 0;
    });

    this.setState({ stocks });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterStocks={this.filterStocks}
          sortStocks={this.sortStocks}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks}
              toggleBuyOrSell={this.toggleBuyOrSell}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myStocks={this.state.myStocks}
              toggleBuyOrSell={this.toggleBuyOrSell}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
