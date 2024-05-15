const express = require("express");
const router = express.Router();
const { createCustomer, getCustomers } = require('../controllers/customerController.js');

router.route('/').post(createCustomer).get(getCustomers);

module.exports = router;
