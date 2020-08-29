import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    let filteredStocks = this.props.stocks.filter(stock => {
      if (this.props.filterType) {
        return stock.type === this.props.filterType
      }
      return true
    }
    )

    return filteredStocks.map(stock => <Stock portfolio={this.props.portfolio} key={stock.id} stock={stock} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
