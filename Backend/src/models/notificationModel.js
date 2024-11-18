const sequelize = require("../config/conectionDB")
const { DataTypes, Model } = require('sequelize')
const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
})

module.exports = Notification