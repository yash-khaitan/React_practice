import React from "react";

function SearchBar(props) {
  function handleFilterTextChange(e) {
    // console.log(e.target.value);
    props.onFilterTextChange(e.target.value);
  }

  function handleInStockChange(e) {
    props.onInStockChange(e.target.checked);
  }

  return (
    <div className="SearchBar">
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={props.filterText}
          onChange={handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={props.inStockOnly}
            onChange={handleInStockChange}
          />{" "}
          Only show product in stock
        </p>
      </form>
    </div>
  );
}

export default SearchBar;
