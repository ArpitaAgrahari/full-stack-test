// controllers/productController.js

// In-memory array to simulate product data
// controllers/productController.js

const Product = require('../models/Product'); // Import Product model

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Retrieve all products
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body); // Create a new product
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
};

// Controller to handle updating an existing product by ID
exports.updateProduct = (req, res) => {
    const { id } = req.params; // Get product ID from request params
    const updatedData = req.body; // Get updated data from request body
    const product = products.find(p => p.id === parseInt(id)); // Find product by ID

    if (product) {
        Object.assign(product, updatedData); // Update product with new data
        res.json(product); // Respond with updated product
    } else {
        res.status(404).json({ message: 'Product not found' }); // Product not found
    }
};

// Controller to handle deleting a product by ID
exports.deleteProduct = (req, res) => {
    const { id } = req.params; // Get product ID from request params
    const index = products.findIndex(p => p.id === parseInt(id)); // Find product index by ID

    if (index !== -1) {
        products.splice(index, 1); // Remove product from array
        res.status(204).end(); // Send 204 No Content status
    } else {
        res.status(404).json({ message: 'Product not found' }); // Product not found
    }
};
