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

let addInformation = async (req, res) => {
    try {
        let result = await informationServices.addInformation(req.body);
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
let editInformation = (req, res) => {
    res.send("edit Information");
}
let delInformation = (req, res) => {
    res.send("del Information");
}
module.exports = {
    getInformation: getInformation,
    addInformation: addInformation,
    editInformation: editInformation,
    delInformation: delInformation
}