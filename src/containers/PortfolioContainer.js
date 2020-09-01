import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  state = {
    port: true
  }

  render() {
    let handleStocks = this.props.portfolyArray.map((stockObj) => <Stock key={stockObj.id} stock={stockObj} state={this.state.port} toggleSell={this.props.toggleSell}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            handleStocks
          }
      </div>
    );
  }

}

export default PortfolioContainer;
