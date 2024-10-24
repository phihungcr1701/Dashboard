const { DATE } = require('sequelize');
const db = require('../models/index')

let getInformation = async () => {
    try {
        let Information = await db.Information.findAll();
        return Information;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let addInformation = async (data) => {
    try {
        let newInformation = await db.Information.create({
            name: data.name,
            gender: data.gender,
            date: data.date,
            phone: data.phone,
            address: data.address,
            accountId: data.accountId
        })
        return newInformation
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getInformation: getInformation,
    addInformation: addInformation
}