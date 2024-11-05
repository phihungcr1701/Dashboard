const express = require('express');
const route = express.Router();
const account = require('../controllers/accountController');
const infor = require('../controllers/inforController');

route.get('/getUser', account.getAccount);
route.post('/addUser', account.addAccount);
route.put('/editUser', account.editAccount);
route.delete('/delUser', account.delAccount);


route.get('/getInfor', infor.getInfor);
route.post('/addInfor', infor.addInfor);
route.put('/editInfor', infor.editInfor);
route.delete('/delInfor', infor.delInfor);

module.exports = route;