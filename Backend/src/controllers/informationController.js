const informationServices = require('../services/informationService')

let getInformation = async (req, res) => {
    try {
        let result = await informationServices.getInformation();
        res.status(200).json({
            mess: "Danh sách Informations",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

let editInformation = async (req, res) => {
    try {
        let result = await informationServices.editInformation(req.body);
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
    getInformation,
    editInformation
}