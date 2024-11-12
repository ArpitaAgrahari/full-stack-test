// routes/products.js

// Import required modules
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Import product controller

// GET all products - Public endpoint
router.get('/', productController.getProducts);

// POST a new product - Requires JWT authentication
router.post('/', productController.createProduct);

// PATCH to update an existing product by ID - Requires JWT authentication
router.patch('/:id', productController.updateProduct);

// DELETE a product by ID - Requires JWT authentication
router.delete('/:id', productController.deleteProduct);

// Export the router to use in server.js
module.exports = router;
