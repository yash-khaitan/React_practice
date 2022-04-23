import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  function handleFilterTextChange(filterText) {
    setFilterText(filterText);
  }

  function handleInStockOnly(inStockOnly) {
    setInStockOnly(inStockOnly);
  }

  const PRODUCTS = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  return (
    <div className="FilterableProductTable">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockOnly}
      />
      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
