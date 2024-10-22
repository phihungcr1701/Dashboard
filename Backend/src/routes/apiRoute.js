const express = require('express');
const route = express.Router();
const account = require('../controllers/accountController');

route.get('/getUser', account.getAccount);
route.post('/addUser', account.addAccount);
route.put('/editUser', account.editAccount);
route.delete('/delUser', account.delAccount);

module.exports = route;