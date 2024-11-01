const express = require('express');
const route = express.Router();
const infor = require('../controllers/inforController');

route.get('/getInfor', infor.getInfor);
route.post('/addInfor', infor.addInfor);
route.put('/editInfor', infor.editInfor);
route.delete('/delInfor', infor.delInfor);

module.exports = route;