const express = require('express');
const route = express.Router();
const information = require('../controllers/informationController');
const middleware = require('../middleware/authMiddleware')

route.get('/getInformation', middleware.verifyToken, information.getInformation);
route.put('/editInformation', information.editInformation);

module.exports = route;