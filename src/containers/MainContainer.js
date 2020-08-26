import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      portfolio: [],
      filter: "None",
      sort: "None",
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocks => this.setState({stocks: stocks}));
  }

  stocksFiltered = () => {
    if (this.state.filter !== "None") {
      return this.state.stocks.filter(stock => stock.type === this.state.filter);
    }
    return this.state.stocks;
  };

  stocksSorted = stocks => {
    switch(this.state.sort) {
      case "Alphabetically":
        return stocks.sort((a, b) => a.name > b.name ? 1 : -1);
      case "Price":
        return stocks.sort((a, b) => a.price > b.price ? 1 : -1);
      default:
        return stocks;
    }
  }

  changeFilter = newFilter => this.setState({filter: newFilter})

  changeSort = newSort => this.setState({sort: newSort})

  addToPortfolio = stockId => {
    const stock = this.state.stocks.find(stock => stock.id === stockId);
    const portfolioStock = this.state.portfolio.find(stock => stock.id === stockId);
    if (stock !== undefined && portfolioStock === undefined) {
      this.setState({portfolio: [...this.state.portfolio, stock]});
    }
  }

  removeFromPortfolio = stockId => {
    this.setState({ portfolio: this.state.portfolio.filter(stock => stock.id !== stockId)});
  }

  render() {
    const stocks = this.stocksSorted(this.stocksFiltered());
    return (
      <div>
        <SearchBar filter={this.state.filter} sort={this.state.sort} changeFilter={this.changeFilter} changeSort={this.changeSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} addToPortfolio={this.addToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
