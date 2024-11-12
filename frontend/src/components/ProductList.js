
// Import React and ProductItem component
import React, { useState } from 'react';
import ProductItem from './ProductItem';

// ProductList component handles sorting and displays a list of products
const ProductList = () => {
    // Array of sample products (could be fetched from an API)
    const products = [
        { id: 1, name: 'Product A', price: 100, rating: 4 },
        { id: 2, name: 'Product B', price: 150, rating: 3 },
        { id: 3, name: 'Product C', price: 200, rating: 5 },
    ];

    // State for sorting order
    const [sortOrder, setSortOrder] = useState("asc");

    // Sorts products based on selected sort order (price ascending/descending)
    const sortedProducts = [...products].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    return (
        <div>
            {/* Dropdown for selecting sort order */}
            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            
            {/* Display sorted products using ProductItem component */}
            <div>
                {sortedProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
