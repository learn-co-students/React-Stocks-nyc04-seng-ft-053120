import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  filterStockArray = () => {
    const filteredArray = this.props.stockArray.filter(stockObj => {
      if (!this.props.searchFilter || this.props.searchFilter === "") return true;
      return stockObj.type.toLowerCase() === this.props.searchFilter.toLowerCase()
    })
    return this.sortStockArray(filteredArray)
  }

  sortStockArray = (filteredArray) => {
    if (!this.props.sort || this.props.sort === "") return filteredArray;
    const sortedArray = filteredArray.sort((stockA, stockB) => {
      if (this.props.sort === "Price") { return parseFloat(stockB.price) - parseFloat(stockA.price) }
      if (this.props.sort === "Alphabetically") { return stockA.ticker.localeCompare(stockB.ticker) }
    })
    return this.renderStockArray(sortedArray)
  }

  renderStockArray = (sortedArray) => {
    return sortedArray.map(stock => {
      return (
        <Stock
          key={stock.id}
          id={stock.id}
          clickHandler={this.handleClick}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
        />
      )
    })
  }

  handleClick = (stock) => {
    // console.log(stock)
    this.props.stockBought(stock)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {this.filterStockArray()}
      </div>
    );
  }

}

export default StockContainer;
