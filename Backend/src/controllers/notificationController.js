const notificationServices = require('../services/notificationService')

let getNotification = async (req, res) => {
    try {
        let result = await notificationServices.getNotification();
        res.status(200).json({
            mess: "Danh sách Notifications",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

let addNotification = async (req, res) => {
    try {
        let result = await notificationServices.addNotification(req.io, req.body);
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

let editNotification = async (req, res) => {
    try {
        let result = await notificationServices.editNotification(req.io, req.body);
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

let delNotification = async (req, res) => {
    try {
        let result = await notificationServices.delNotification(req.io, req.body);
        res.status(200).json({
            mess: "Đã xóa thành công",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

module.exports = {
    getNotification,
    addNotification,
    editNotification,
    delNotification
}