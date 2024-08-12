// server/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  price: Number,
  description: String,
  benefits: [String],
  details: [String],
  moreDetails: [String],
  colors: [String],
  sizes: [String],
  imageUrl: String,
  thumbnails: [String],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
