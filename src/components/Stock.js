import React from 'react'

const Stock = (props) => {
  const {name, price, ticker, id} = props.stock

  let handleClick = (e)=>{
    // pass id to the passed down function?
       console.log(props)
       props.state ? props.toggleSell(props.stock.name) : props.toggleBought(props.stock.name)
  //  return props.toggleBought(props.stock.name)
  }

  return(
    <div>
      {/*  */}
      <div className="card" onClick={handleClick} >
        <div className="card-body" >
          <h5 className="card-title">{
              name
            }</h5>
          <p className="card-text">{
            ` ${ticker}: ${price}`
            }</p>
        </div>
      </div>


    </div>

  )
}

export default Stock
