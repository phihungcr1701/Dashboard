const express = require('express');
const route = express.Router();
const account = require('../controllers/accountController');
const information = require('../controllers/informationController');
const controller = require('../controllers/index')

route.get('/getAccount', account.getAccount);
route.put('/editAccount', account.editAccount); // all data account need edit

route.get('/getInformation', information.getInformation);
route.put('/editInformation', information.editInformation);

route.get('/find', controller.find); //id account
route.post('/add', controller.add); //data account {username, password, role(if it have)}
route.delete('/del', controller.del); //id account

module.exports = route;