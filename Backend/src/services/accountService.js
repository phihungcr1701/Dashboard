const db = require('../models/index');

let getInFromAc = async (data) => {
    try {
        let Accounts = await db.Account.findOne({
            where: { id: data.id }, // Lấy tài khoản có id là 1
            include: db.Information  // Bao gồm cả thông tin từ bảng Information
        });
        return Accounts;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

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

module.exports = {
    getAccount: getAccount,
    addAccount: addAccount,
    getInFromAc: getInFromAc
}