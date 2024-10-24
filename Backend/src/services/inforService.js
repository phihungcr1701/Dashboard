const db = require('../models/index');

let getInfor = async () => {
    try {
        let infors = await db.Information.findAll();
        return infors;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let addInfor = async () => {

}

let editInfor = async () => {

}
let delInfor = async () => {

}

module.exports = {
    getInfor: getInfor,
    addInfor: addInfor,
    editInfor: editInfor,
    delInfor: delInfor
}