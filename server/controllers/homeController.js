
const Customer = require("../models/customerModel");
const Event = require("../models/orderModel");
const Promotion = require("../models/promotionModel");
const createOrder = async (req, res) => {
  const { items, year, month, day } = req.body
  const event = await Event.create({ items, year, month, day });
  const customer = await Customer.create({});
  res.status(200).json({ event, customer });
}

const getOrders = async (req, res) => {
  const event = await Event.find({});
  res.status(200).json(event);
};
const createPromotion = async (req, res) => {
  const updateData = req.body
  try {
    console.log(req.body)
    const result = await Promotion.findByIdAndUpdate(promo._id, updateData, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
const getPromition = async (req, res) => {
  const event = await Event.find({});
  res.status(200).json(event);
};
module.exports = { createOrder, getOrders, getPromition, createPromotion };