import React from 'react';

const ProductItem = ({ product }) => (
    <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
    </div>
);

export default ProductItem;
