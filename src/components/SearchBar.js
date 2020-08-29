import React from 'react';

const SearchBar = (props) => {

  let handleSelect = (event) => {
    if (event.target.value === "Alphabetically") {
      props.sort(event.target.value)
      event.target.checked = null
    } else if (event.target.value === "Price") {
      props.sort(event.target.value)
      event.target.checked = null
    }
  }

  let handleChange = (event) => {
    props.filter(event.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={(event) => {handleSelect(event)}}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={(event) => {handleSelect(event)}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => {handleChange(event)}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
