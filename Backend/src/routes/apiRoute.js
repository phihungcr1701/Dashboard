const express = require('express');
const route = express.Router();
const account = require('../controllers/accountController');
const information = require('../controllers/informationController');

route.get('/getAccount', account.getAccount);
route.post('/addAccount', account.addAccount);
route.put('/editAccount', account.editAccount);
route.delete('/delAccount', account.delAccount);

route.get('/getInformation', information.getInformation);
route.post('/addInformation', information.addInformation);
route.put('/editInformation', information.editInformation);
route.delete('/delInformation', information.delInformation);

route.get('/getInFromAc', account.getInFromAc); // từ id của Account tham chiếu đến accountId của Information

module.exports = route;