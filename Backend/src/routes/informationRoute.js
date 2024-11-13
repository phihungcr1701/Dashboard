const express = require('express');
const route = express.Router();
const information = require('../controllers/informationController');

route.get('/getInformation', information.getInformation);
route.put('/editInformation', information.editInformation);

module.exports = route;