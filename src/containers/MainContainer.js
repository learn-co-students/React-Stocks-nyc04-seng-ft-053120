import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stockArray: [],
    portfolioArray: [],
    searchFilter: "",
    sort: "Price"
  }

  componentDidMount() {
    fetch(`http://localhost:3000/stocks`)
      .then(res => res.json())
      .then(stockArray => {
        this.setState({ stockArray: stockArray })
      })
  }

  // probably could combine the stockBoughtHandler and stockSoldHandler handlers

  stockBoughtHandler = (stockBought) => {
    console.log(stockBought)
    const newStockArray = this.state.stockArray.filter(stock => (stock.id !== stockBought.id))
    const newPortfolioArray = [...this.state.portfolioArray, stockBought]
    this.setState({
      stockArray: [...newStockArray],
      portfolioArray: [...newPortfolioArray]
    })
  }

  stockSoldHandler = (stockSold) => {
    console.log(stockSold)
    const newPortfolioArray = this.state.portfolioArray.filter(stock => (stock.id !== stockSold.id))
    const newStockArray = [...this.state.stockArray, stockSold]
    this.setState({
      stockArray: [...newStockArray],
      portfolioArray: [...newPortfolioArray]
    })
  }

  filterHandler = (event) => {
    event.persist()
    console.log("filter", event.target.value)
    this.setState({ searchFilter: event.target.value.toLowerCase() })
  }

  sortHandler = (event) => {
    event.persist()
    console.log("sort", event)
    this.setState({ sort: event.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <SearchBar sort={this.state.sort} handleSort={this.sortHandler} handleFilter={this.filterHandler} />

        <div className="row">
          <div className="col-8">

            <StockContainer
              stockBought={this.stockBoughtHandler}
              stockArray={this.state.stockArray}
              searchFilter={this.state.searchFilter}
              sort={this.state.sort}
            />

          </div>
          <div className="col-4">

            <PortfolioContainer
              stockSold={this.stockSoldHandler}
              stockArray={this.state.portfolioArray}
              searchFilter={this.state.searchFilter}
              sort={this.state.sort}
            />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
