const express = require("express");
const router = express.Router();
const { createPublication } = require('../controllers/publicationController.js');

router.route('/').post(createPublication).get(getPublication);



module.exports = router;
