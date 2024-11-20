const authService = require('../services/authService');


let registerAccount = async (req, res) => {
    try {
        let account = await authService.registerAccount(req.body);
        const { password, ...others } = account.toJSON();
        res.status(200).json({
            mess: "Đăng ký thành công",
            data: others
        });
    } catch (error) {
        if (error.statusCode === 409) {
            return res.status(409).json({
                mess: "Tài khoản đã tồn tại"
            });
        }
        res.status(500).json({
            mess: error
        });

    }
}

let loginAccount = async (req, res) => {
    try {
        let result = await authService.loginAccount(req.body, res);
        res.status(200).json({
            mess: "Đăng nhập thành công",
            data: result
        });
    } catch (error) {
        if (error.status === 404) {
            return res.status.json({
                mess: "Đăng nhập thất bại"
            });
        }
        res.status(500).json({
            mess: error
        });
    }
}

let editAccount = async (req, res) => {
    try {
        let result = await authService.editAccount(req.body);
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


const delAccount = async (req, res) => {
    try {
        let delAccount = await authService.delAccount(req.query);
        res.status(200).json({
            mess: "Đã xóa thành công"
        })
    } catch (error) {
        res.status(500).json({
            mess: error
        })
    }
}

let requestRefreshToken = (req, res) => {
    try {
        const newAccessToken = authService.requestRefreshToken(req.cookies.refreshToken, res);
        res.status(200).json({
            mess: "refresh Token thành công",
            accessToken: newAccessToken
        });
    } catch (error) {
        if (error === 403) {
            return res.status(403).json({
                mess: "refreshToken không tồn tại"
            });
        }
        res.status(500).json({
            mess: error
        })
    }
}

let logoutAccount = (req, res) => {
    res.clearCookie("refreshToken");
    res.status(200).json({
        mess: "Logout thành công"
    });
}
module.exports = {
    registerAccount,
    loginAccount,
    editAccount,
    delAccount,
    requestRefreshToken,
    logoutAccount
}