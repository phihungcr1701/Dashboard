const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            mess: "Không có token"
        })
    }
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({
                mess: "Token không tồn tại"
            })
        }
        req.user = user;
        next();
    })
}

module.exports = {
    verifyToken,
}