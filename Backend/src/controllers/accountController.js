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

let addAccount = async (req, res) => {
    try {
        let result = await accountServices.addAccount(req.body);
        res.status(200).json({
            mess: "Đã thêm thành công",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}
let editAccount = (req, res) => {
    res.send("edit Account");
}
let delAccount = (req, res) => {
    res.send("del Account");
}
module.exports = {
    getAccount: getAccount,
    addAccount: addAccount,
    editAccount: editAccount,
    delAccount: delAccount
}