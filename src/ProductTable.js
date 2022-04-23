import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable(props) {
  const product = props.products;
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  let lastcategory = null;
  const rows = [];
  product.forEach((product) => {
    if(product.name.indexOf(filterText) === -1)
    {
      return;
    }

    if(inStockOnly && !product.stocked)
    {
      return;
    }
    if (product.category !== lastcategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(<ProductRow product={product} key={product.name} />);
    lastcategory = product.category;
  });
  const STYLE = { "text-align": "Left", margin: "auto" };
  return (
    <div className="ProductTable">
      <table style={STYLE}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
