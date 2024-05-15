const express = require("express");
const router = express.Router();
const { createOrder, getOrders, createPromotion, getPromition } = require('../controllers/homeController.js');

router.route('/').post(createOrder).get(getOrders);
router.route('/promo').post(createPromotion).get(getPromition);
// router.route('/get')
module.exports = router;
