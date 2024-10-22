const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/conectionDB');
const Account = sequelize.define('Account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
    },
});
module.exports = Account;