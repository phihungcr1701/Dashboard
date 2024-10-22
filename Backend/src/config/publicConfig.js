// hien tai chua can
const express = require('express');
const path = require('path');
const publicConfig = (app) => {
    app.use('/static', express.static(path.join('./src', 'public')));
}
module.exports = publicConfig;
