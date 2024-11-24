const express = require('express');
const route = express.Router();
const notification = require('../controllers/notificationController');
const middleware = require('../middleware/authMiddleware')

route.get('/getNotification', middleware.verifyToken, notification.getNotification);
route.post('/addNotification', middleware.verifyToken, notification.addNotification);
route.put('/editNotification', middleware.verifyToken, notification.editNotification);
route.delete('/delNotification', middleware.verifyToken, notification.delNotification);

module.exports = route;