const sequelize = require("../config/conectionDB")
const { DataTypes, Model } = require('sequelize')
const Information = sequelize.define('Information', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.BOOLEAN
    },
    date: {
        type: DataTypes.DATE
    },
    phone: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    accountId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Account',
            key: 'Id'
        }
    } 
})

module.exports = Information