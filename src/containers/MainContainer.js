import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks:[],
    portfolio: [],
    sort: "none",
    filtered: "All"

  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocksArr => {this.setState({
      stocks: stocksArr
    })
    })
  }

  handleClick = (evt) => {
    const updatedArray = [...this.state.portfolio, evt]
    this.setState({
      portfolio: updatedArray
    })
  }

  //remove from Inventory
  handleSell = (evt) => {
    console.log("INSIDE SELLL WAHOOOO!")
    let newPortfolio = this.state.portfolio.filter(x => x.id !== evt.id)
    this.setState({
      portfolio: newPortfolio
    })
  }

  handleSort = (evt) => {
    console.log('INside TOgggle!')
    console.log(evt)
    this.setState({
      sort: evt
    })
  }

  handleFilter = (evt) => {
    console.log('INSIDE!!!!!!!!!!!!!!!!!')
    this,this.setState({
      filtered: evt
    },()=>{console.log(this.state.filtered)})
  }

  ///The filter function is not completely working, needs repair 🛠
  renderStocks = () => {
    let filteredStocks = [...this.state.stocks]
    if (this.state.filtered !== "All"){
      return filteredStocks = filteredStocks.filter(stocks =>{stocks.type === this.state.filtered})
    }

    switch(this.state.sort){
      case "Alphabetically":
        return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      case "Price":
          return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }
  }

  render() {
    let display = this.renderStocks()
    console.log(display)

    return (
      <div>
        <SearchBar filter={this.state.filter} handlefilter= {this.handleFilter} handleSort={this.handleSort} sort = {this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={display} handleClick={this.handleClick} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleSell ={this.handleSell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
