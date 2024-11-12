// server.js

// Import required modules
const express = require('express');
const productRoutes = require('./routes/products');
const auth = require('./middlewares/auth'); // JWT authentication middleware

// Initialize the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Protected route for product management, requires JWT authentication
app.use('/products', auth, productRoutes);

// Start the server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));
