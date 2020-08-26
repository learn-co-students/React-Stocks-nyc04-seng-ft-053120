import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map(stock => {
              return <Stock key={stock.id} id={stock.id} stock={stock} handleOnClick={this.props.removeFromPortfolio} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
