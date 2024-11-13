const express = require('express');
const route = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

route.post('/register', authController.registerAccount);
route.post('/login', authController.loginAccount);

// route.put('/editAccount', authController.editAccount);
// route.delete('/delAccount', authMiddleware.verifyToken, authController.delAccount);

route.post('/refresh', authController.requestRefreshToken);
route.post('/logout', authMiddleware.verifyToken, authController.logoutAccount);

module.exports = route;