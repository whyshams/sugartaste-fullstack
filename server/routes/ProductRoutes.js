// server/routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Create a new product
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
});

module.exports = router;
