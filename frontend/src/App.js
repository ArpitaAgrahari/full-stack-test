
// Import React and ProductList component
import React from 'react';
import ProductList from './components/ProductList';

// Main app component for rendering the product listing page
function App() {
    return (
        <div>
            <h1>Product Listing</h1>
            {/* Renders ProductList component */}
            <ProductList />
        </div>
    );
}

export default App;
