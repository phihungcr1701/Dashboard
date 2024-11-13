const { where } = require('sequelize');
const jwt = require('jsonwebtoken');
const db = require('../models/index');

let generateAccessToken = (account) => {
    return jwt.sign(
        {
            id: account.id,
            role: account.role
        },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "60s" }
    );
}

let generateRefreshToken = (account, res) => {
    const refreshToken = jwt.sign(
        {
            id: account.id,
            role: account.role
        },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "60d" }
    );
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/",
        sameSite: "Strict"
    });
}

let requestRefreshToken = (refreshToken) => {
    if (!refreshToken) {
        const error = new Error();
        error.status(403);
        throw error;
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
        if (err) {
            const error = new Error();
            error.status(403);
            throw error;
        }
        const newAccessToken = generateAccessToken(user);
        generateRefreshToken(user, res);
        return newAccessToken;
    })
}

let registerAccount = async (data) => {
    try {
        let checkAccount = await db.Account.findOne({
            where: {
                email: data.email
            }
        });
        if (checkAccount) {
            let error = new Error();
            error.statusCode = 409;
            throw error;
        }
        let newAccount = await db.Account.create({
            email: data.email,
            password: data.password,
            role: data.role || "user"
        });
        await db.Information.create({
            name: data.name,
            accountId: newAccount.id
        });
        return newAccount;
    } catch (error) {
        throw error;
    }
}

let loginAccount = async (data, res) => {
    let accessToken;
    try {
        let account = await db.Account.findOne({
            where: {
                email: data.email,
                password: data.password
            }
        });

        if (!account) {
            let error = new Error();
            error.statusCode = 404;
            throw error;
        } else {
            accessToken = generateAccessToken(account);
            generateRefreshToken(account, res);
        }
        const { password, ...others } = account.toJSON();
        return { ...others, accessToken };
    } catch (error) {
        console.log(error);
        throw error;
    }
}


let editAccount = async (data) => {
    try {
        let editAccount = await db.Account.update(data, {
            where: { id: data.id }
        });
        return editAccount;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let delAccount = async (data) => {
    try {
        let delAccount = await db.Account.destroy({
            where: {
                id: data.id
            }
        });
        return delAccount;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    registerAccount,
    loginAccount,
    editAccount,
    delAccount,
    requestRefreshToken
}