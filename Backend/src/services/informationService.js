const { Op, where } = require('sequelize');
const db = require('../models/index')

let handleActiveColumn = (activeColumn) => {
    let newActiveColumn;
    switch (activeColumn) {
        case "Tên":
            newActiveColumn = "Name";
            break;
        case "Giới tính":
            newActiveColumn = "Gender";
            break;
        case "Ngày sinh":
            newActiveColumn = "Date";
            break;
        case "Số điện thoại":
            newActiveColumn = "Phone";
            break;
        default:
            break;
    }
    return newActiveColumn;
}

let handleWhereClause = (type) => {
    let whereClause;
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 2);
    switch (type) {
        case "Danh sách người dùng":
            whereClause = {};
            break;
        case "Người dùng mới trong tháng":

            whereClause = {
                createdAt: {
                    [Op.gte]: firstDayOfMonth
                }
            };
            break;
        case "Người dùng không hoạt động":
            //
            break;
        case "Lượt truy cập trong tháng":
            whereClause = {
                updatedAt: {
                    [Op.gte]: firstDayOfMonth
                }
            };
            break;
        default:
            break;
    }
    return whereClause;
}

let getInformation = async (type, inputSearch, activeColumn, isSortAsc) => {


    let sort = (isSortAsc === "true") ? true : false;
    const whereClause = inputSearch.trim() !== "" ? ({
        name: {
            [Op.regexp]: `${inputSearch}*`
        }
    }) : {};

    const orderClause = activeColumn ? ([[handleActiveColumn(activeColumn), sort ? "ASC" : "DESC"]]) : undefined;

    try {
        const information = await db.Information.findAll({
            where: { ...whereClause, ...handleWhereClause(type) },
            order: orderClause,
            logging: console.log
        })
        return information;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let addInformation = async (data) => {
    try {
        let newInformation = await db.Information.create({
            name: data.name,
            gender: data.gender,
            date: data.date,
            phone: data.phone,
            address: data.address,
            accountId: data.accountId
        })
        return newInformation
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let editInformation = async (data) => {
    try {
        let editInformation = await db.Information.update(data, {
            where: { id: data.id }
        });
        return editInformation;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let delInformation = async (data) => {
    try {
        let delInformation = await db.Information.destroy({
            where: { id: data.id }
        });
        return delInformation;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getInformation,
    addInformation,
    editInformation,
    delInformation
}