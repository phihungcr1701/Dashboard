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
            role: data.role
        });
        return newAccount;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getAccount: getAccount,
    addAccount: addAccount
}