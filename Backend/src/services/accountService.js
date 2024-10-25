const db = require('../models/index');

let getAccount = async () => {
    try {
        let Accounts = await db.Account.findAll();
        return Accounts;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let addAccount = async (data) => {
    try {
        let newAccount = await db.Account.create({
            email: data.email,
            password: data.password,
            role: data.role || "user"
        });
        return newAccount;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let editAccount = async (data) => {
    try {
        let editAccount = await db.Account.update(data, {
            where: { id: data.id }
        });
        return editAccount;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let delAccount = async (data) => {
    try {
        let delAccount = await db.Account.destroy({
            where: { id: data.id }
        });
        return delAccount;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getAccount,
    addAccount,
    editAccount,
    delAccount
}