const express = require('express');
const route = express.Router();
const information = require('../controllers/informationController');
const middleware = require('../middleware/authMiddleware')

route.get('/getInformation', middleware.verifyToken, information.getInformation);
route.get('/getUserInfors', middleware.verifyTokenAndAdmin, information.getUserInformation);
route.put('/editInformation', middleware.verifyTokenAndAdmin, information.editInformation);
route.get('/dowload/excel', information.dowloadExcel);

module.exports = route;