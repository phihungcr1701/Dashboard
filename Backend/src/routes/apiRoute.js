const express = require('express');
const route = express.Router();
const account = require('../controllers/accountController');
const information = require('../controllers/informationController');
const controller = require('../controllers/index')

route.get('/getAccount', account.getAccount);
route.post('/addAccount', account.addAccount); //data account {username, password, role(if it have)}
route.put('/editAccount', account.editAccount); // all data account need edit
route.delete('/delAccount', account.delAccount); //id account

route.get('/getInformation', information.getInformation);
route.put('/editInformation', information.editInformation);

route.get('/find', controller.find); //id account

module.exports = route;