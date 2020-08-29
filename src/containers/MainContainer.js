import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filterType: ''
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then((stockObjArr) => {
      this.setState({
        stocks: stockObjArr
      })
    })
  }

  handlePortfolio = (stock) => {
    if (this.state.portfolio.includes(stock)) {
      let removedStockList = this.state.portfolio.filter(stk => stk.id !== stock.id)

      this.setState({
        portfolio: removedStockList
      })
    } else {
      let addStockList = [...this.state.portfolio, stock]
      this.setState({
        portfolio: addStockList
      }) 
    }
  }

  handleSort = (type) => {
    if (type === "Alphabetically") {
      let alphaSorted = this.state.stocks.sort((stock1, stock2) => { return stock1.name.localeCompare(stock2.name)})
      this.setState({
        stocks: alphaSorted
      })
    } else if (type === "Price") {
      let priceSorted = this.state.stocks.sort((stock1, stock2) => { return stock1.price - stock2.price})
      this.setState({
        stocks: priceSorted
      })
    }
  }

  handleFilter = (type) => {
    this.setState({
      filterType: type
    })
  }

  render() {
    return (
      <div>
        <SearchBar sort={this.handleSort} filter={this.handleFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer filterType={this.state.filterType} portfolio={this.handlePortfolio} stocks={this.state.stocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.handlePortfolio} stocks={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
