const accountServices = require('../services/accountService');
const informationServices = require('../services/informationService');

let find = async (req, res) => {
    try {
        let accountOne = (await accountServices.getAccount()).find(item => item.id == req.body.id);
        let informationOne = (await informationServices.getInformation()).find(item => item.accountId == req.body.id);
        res.status(200).json({
            mess: "Information của Account",
            data: {
                account: accountOne,
                information: informationOne
            }
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

let add = async (req, res) => {
    try {
        // let account = await accountServices.addAccount(req.body);
        console.log(req.query);
        // let accountOne = (await accountServices.getAccount()).find(item => item.email == req.body.email);
        // let data = {
        //     accountId: accountOne.id
        // };
        // let information = await informationServices.addInformation(data);
        // res.status(200).json({
        //     mess: "Đã thêm thành công",
        //     data: {
        //         account: account,
        //         information: information
        //     }
        // });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

let del = async (req, res) => {
    try {
        let result = await accountServices.delAccount(req.body);
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
    find,
    add,
    del
}