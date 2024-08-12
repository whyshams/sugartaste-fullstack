// server/models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    selectedColor: {
      type: String,
      required: true,
    },
    selectedSize: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
