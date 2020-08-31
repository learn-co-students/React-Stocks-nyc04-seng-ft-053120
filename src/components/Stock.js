import React from 'react'

const Stock = (props) => (
  <div>

    {/* <Stock key={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} /> */}

    <div className="card" onClick={() => {
      props.clickHandler({
        id: props.id,
        ticker: props.ticker,
        type: props.type,
        name: props.name,
        price: props.price
      })
    }}>

      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.ticker + ": " + props.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
