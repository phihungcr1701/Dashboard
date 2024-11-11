const informationServices = require('../services/informationService')

let getInformation = async (req, res) => {
    const { type, inputSearch, activeColumn, isSortAsc } = req.query;
    // console.log("input:", inputSearch, activeColumn, isSortAsc);
    try {
        let result = await informationServices.getInformation(type, inputSearch, activeColumn, isSortAsc);
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