const express = require('express');
var ws = require('express-ws');
const router = express.Router();
const customerController = require('../controllers/customerController');


router.get('/', customerController.mimqtt);


module.exports = router;