
// Import React
import React from 'react';

// ProductItem component displays individual product details
const ProductItem = ({ product }) => (
    <div>
        <h3>{product.name}</h3>         {/* Product name */}
        <p>Price: ${product.price}</p>   {/* Product price */}
        <p>Rating: {product.rating}</p>  {/* Product rating */}
    </div>
);

export default ProductItem;
