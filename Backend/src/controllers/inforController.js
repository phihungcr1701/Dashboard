const inforService = require('../services/inforService');

let getInfor = async (req, res) => {
    try {
        let infors = await inforService.getInfor();
        res.status(200).json({
            mess: "Danh sách các infors",
            data: infors
        })
    } catch (error) {
        console.log(error);
    }
}

let addInfor = async (req, res) => {
    try {
        let infor = await inforService.addInfor(req.data);
        res.status(200).json({
            mess: "Đã thêm thành công",
            data: infor
        })
    } catch (error) {
        console.log(error);
    }
}

let editInfor = async (req, res) => {

}

let delInfor = async (req, res) => {

}

module.exports = {
    getInfor: getInfor,
    addInfor: addInfor,
    editInfor: editInfor,
    delInfor: delInfor
}