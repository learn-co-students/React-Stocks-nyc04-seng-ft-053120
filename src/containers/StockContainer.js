import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  // handleStocks = () => {
  //   return this.props.stocks.map((stockObj) => <Stock key={stockObj.id} stock={stockObj}/>)
  // }
  
  render() {
    let handleStocks = this.props.stocks.map((stockObj) => <Stock key={stockObj.id} stock={stockObj} toggleBought={this.props.toggleBought}/>)
    return (
      <div>
        <h2>Stocks</h2>
        {
          handleStocks
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;