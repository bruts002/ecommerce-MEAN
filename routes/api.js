var express = require('express');
var router = express.Router();

var tasks = require('./tasks');
var product = require('./product');

router.all(/task?s/, tasks);
router.all(/product/, product);

module.exports = router;