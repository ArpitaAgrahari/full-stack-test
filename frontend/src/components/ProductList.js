import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product A', price: 100, rating: 4 },
        { id: 2, name: 'Product B', price: 150, rating: 3 },
        { id: 3, name: 'Product C', price: 200, rating: 5 },
    ];

    const [sortOrder, setSortOrder] = useState("asc");

    const sortedProducts = [...products].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    return (
        <div>
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            <div>
                {sortedProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
