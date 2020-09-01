import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
 

  renderStock = ()=> {
    
   return this.props.portfolio.map((p) => {
      return <Stock key={p.id} stock={p} handleClick = {this.props.handleSell}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStock()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
