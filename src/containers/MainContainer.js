import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sort: "name",
    type: "Tech"
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => this.setState({stocks: data}))
  }

  handleAddToPortfolio = (stockId) => {
    const boughtStock = this.state.stocks.find(stock => stockId === stock.id)
    this.setState(prevState => ({
      portfolio: [
        ...prevState.portfolio,
        boughtStock
      ]
    }))
  }

  handleRemoveFromPortfolio = (stockId) => {
    const updatedPortfolio = this.state.portfolio.filter(stock => {
      if (stock.id === stockId) {
        return null
      }
      return stock
    })

    this.setState(prevState => ({
      portfolio: updatedPortfolio
    }))
  }

  handleSort = (event) => {
    event.persist();
    this.setState(prevState => ({
      sort: event.target.value
    }))
  }

  handleFilter = (event) => {
    event.persist();
    this.setState(prevState => ({
      type: event.target.value
    }))
  }

  renderStocks = () => {
    const filteredStocks = this.state.stocks.filter(stock => stock.type === this.state.type)
    const sortedStocks = filteredStocks.sort((stock1, stock2) => stock1[this.state.sort] > stock2[this.state.sort] ? 1 : -1)

    return sortedStocks
  }

  render() {
    return (
      <div>
        <SearchBar sort={this.state.sort} handleSort={this.handleSort} handleFilter={this.handleFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.renderStocks()} handleClick={this.handleAddToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} handleClick={this.handleRemoveFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
