import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map(stockObj => (
    <Stock 
    key={stockObj.id}
    stock={stockObj}
    handleClick={this.props.handleClick}
    />
    ))
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
