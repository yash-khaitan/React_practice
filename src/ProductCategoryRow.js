import React from 'react'

function ProductCategoryRow(props) {
  return (
      <tr>
        <th colSpan={2}>{props.category}</th>
      </tr>
  )
}

export default ProductCategoryRow