const { Op, where } = require('sequelize');
const db = require('../models/index')

let handleActiveColumn = (activeColumn) => {
    let newActiveColumn;
    switch (activeColumn) {
        case "Tên":
            newActiveColumn = "name";
            break;
        case "Email":
            newActiveColumn = "email";
            break;
        case "Quyền":
            newActiveColumn = "role";
            break;
        case "Ngày tham gia":
            newActiveColumn = "createdAt";
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
            whereClause = {
                updatedAt: {
                    [Op.lt]: firstDayOfMonth
                }
            };
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
        [Op.or]: [
            {
                name: {
                    [Op.regexp]: `${inputSearch}*`
                }
            },
            {
                "$Account.email$": {
                    [Op.regexp]: `${inputSearch}*`
                }
            },
            {
                "$Account.role$": {
                    [Op.regexp]: `${inputSearch}*`
                }
            }
        ]
    }) : {};

    const orderClause = activeColumn
        ? handleActiveColumn(activeColumn) === "email" || handleActiveColumn(activeColumn) === "role"
            ? [[{ model: db.Account }, handleActiveColumn(activeColumn), sort ? "ASC" : "DESC"]]
            : [[handleActiveColumn(activeColumn), sort ? "ASC" : "DESC"]]
        : undefined;

    try {
        const information = await db.Information.findAll({
            include: [
                {
                    model: db.Account,
                    attributes: ["email", "role"],
                    required: true
                }
            ],
            where: { ...whereClause, ...handleWhereClause(type) },
            order: orderClause,
            // logging: console.log
        })
        return information;
    } catch (error) {
        throw error;
    }
}

let getCount = async () => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 2);

    try {
        const totalUsers = await db.Information.count();

        const newUsersMonth = await db.Information.count({
            where: {
                createdAt: {
                    [Op.gte]: firstDayOfMonth
                }
            }
        });

        const userOffMonth = await db.Information.count({
            where: {
                updatedAt: {
                    [Op.lt]: firstDayOfMonth
                }
            }
        });

        const monthlyVisits = await db.Information.count({
            where: {
                updatedAt: {
                    [Op.gte]: firstDayOfMonth
                }
            }
        });

        return {
            totalUsers,
            newUsersMonth,
            userOffMonth,
            monthlyVisits
        };
    } catch (error) {
        throw error;
    }
};


let getUserInformation = async (id) => {
    try {
        const res = await db.Information.findOne({
            include: [
                {
                    model: db.Account,
                    attributes: ["email", "role"],
                    required: true
                }
            ],
            where: {
                accountId: id
            },
        })
        return res;
    } catch (error) {
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
    const infors = {
        name: data.nameInput,
        gender: data.genderInput,
        date: data.dateInput,
        phone: data.phoneInput,
        address: data.addressInput
    }
    try {
        let editInformation = await db.Information.update(infors, {
            where: { accountId: data.id }
        });
        return editInformation;
    } catch (error) {
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
    delInformation,
    getUserInformation,
    getCount
}