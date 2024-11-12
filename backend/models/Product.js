// models/Product.js

// Import mongoose for schema creation and database interaction
const mongoose = require('mongoose');

// Define the Product schema for an e-commerce platform
const productSchema = new mongoose.Schema({
    // Product name (required)
    name: {
        type: String,
        required: true,
        trim: true
    },
    // Product price (required)
    price: {
        type: Number,
        required: true,
        min: 0
    },
    // Product rating (optional, default is 0)
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    // Product stock quantity (required)
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    // Product category (optional)
    category: {
        type: String,
        trim: true
    },
    // Product creation date (auto-generated)
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the Product model for use in other parts of the application
module.exports = mongoose.model('Product', productSchema);
