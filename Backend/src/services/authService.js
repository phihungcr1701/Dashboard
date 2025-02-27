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
        { expiresIn: "20s" }
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
        secure: false,
        path: "/",
        sameSite: "Strict",
        maxAge: 60 * 24 * 60 * 60 * 1000
    });
}

let requestRefreshToken = (refreshToken, res) => {
    let newAccessToken;
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
        newAccessToken = generateAccessToken(user);
        generateRefreshToken(user, res);
    })
    return newAccessToken;
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
        const account = await db.Account.findOne({
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
            try {
                await db.Information.update(
                    {
                        //cap nhat mot truong bat ky de updatedAt duoc cap nhat
                        accountId: account.id
                    },
                    {
                        where: {
                            accountId: account.id
                        }
                    }
                );
            } catch (error) {
                throw error;
            }
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
        let res = await db.Account.update(
            { password: data.newPassword },
            {
                where: {
                    id: data.id,
                    password: data.password
                }
            });
        if (res[0] === 0) {
            throw new Error();
        }
        return res;
    } catch (error) {
        throw error;
    }
}

let delAccount = async (data) => {
    try {
        await db.Account.destroy({
            where: {
                id: data.id
            }
        });
    } catch (error) {
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