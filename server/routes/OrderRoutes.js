const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

const createOrder = async (req, res) => {
  try {
    const { quantity, selectedColor, selectedSize } = req.body;

    const newOrder = new Order({
      quantity,
      selectedColor,
      selectedSize,
      timestamp: new Date().toISOString(),
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order", error });
  }
};

// Function to get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
};

router.post("/", createOrder);

router.get("/", getAllOrders);

module.exports = router;
