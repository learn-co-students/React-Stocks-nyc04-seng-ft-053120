import React from 'react';

const SearchBar = (props) => {
  const isSortChecked = val => {
    return props.sort === val;
  }

  const handleSortChange = e => {
    props.changeSort(e.target.value);
  }

  const handleFilterChange = e => {
    props.changeFilter(e.target.value);
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={isSortChecked("Alphabetically")} onChange={handleSortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={isSortChecked("Price")} onChange={handleSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
