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

let editInformation = async (data) => {
    try {
        let editInformation = await db.Information.update(data, {
            where: { id: data.id }
        });
        return editInformation;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let delInformation = async (data) => {
    try {
        let delInformation = await db.Information.destroy({
            where: { id: data.id }
        });
        return delInformation;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getInformation,
    addInformation,
    editInformation,
    delInformation
}