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

const addAccount = async (req, res) => {
    try {
        let newAccount = await accountServices.addAccount(req.body);
        res.status(200).json({
            mess: "Đã thêm thành công",
            data: {
                role: newAccount.role
            }
        });
    } catch (error) {
        if (error.statusCode === 409) {
            res.status(409).json({
                mess: "Tài khoản đã tồn tại"
            });
        } else {
            res.status(500).json({
                mess: error
            });
        }
    }
}

const delAccount = async (req, res) => {
    try {
        let delAccount = await accountServices.delAccount(req.body);
        res.status(200).json({
            mess: "Đã xóa thành công"
        })
    } catch (error) {
        res.status(500).json({
            mess: error
        })
    }
}

module.exports = {
    getAccount,
    addAccount,
    editAccount,
    delAccount
}