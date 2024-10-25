const accountServices = require('../services/accountService');

let getAccount = async (req, res) => {
    try {
        let result = await accountServices.getAccount();
        res.status(200).json({
            mess: "Danh sách Accounts",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

let editAccount = async (req, res) => {
    try {
        let result = await accountServices.editAccount(req.body);
        res.status(200).json({
            mess: "Đã cập nhập thành công",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

module.exports = {
    getAccount,
    editAccount
}