import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks:[],
    portfoly: [{name: "fran"}],
    filterType: "Tech"
  }

  stockData = () => {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(info =>{
      this.handleStockInfo(info)
    })
  }

  handleStockInfo = (arr) => {
    this.setState({stocks: [...arr]})
  }
  
  componentDidMount(){
    this.stockData()
  }
 
  addStock = (name) => {
    
    // add the obj wiht the matching name to the states portfoly array
   let portfolyStock = this.state.stocks.find((stock) => stock.name === name)
    this.setState((prev) => ({
      portfoly: [...prev.portfoly, portfolyStock]
    })
    )
  }
  
  sellStock = (name) => {
    console.log('WE SELL NOW',name)
    const updatedArr = this.state.portfoly.filter(stock => stock.name !== name)
    this.setState({
      portfoly: updatedArr
    })
  }
  
  handleFilter = (type) => {
    this.setState({
      filterType: type
    })
  }
  
  

  render() {
    let stockArr = this.state.stocks
    console.log("object", this.state)
    let filter = this.state.stocks.filter((stock) => stock.type === this.state.filterType )
    return (
      <div>
        <SearchBar filter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={filter} toggleBought={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolyArray={this.state.portfoly} toggleSell={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
