require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth)
        res.statusCode = 422;
    else
        jwt.verify(auth.replace('Bearer ', ''), process.env.JWT_SECRET, (err, decoded) => {
            if (err)
                res.statusCode = 401;
            else
                req.user = decoded.user;
        })

    switch (res.statusCode) {
        case 422:
            return res.json({
                auth: false,
                message: "Missing authorization token"
            })
        case 401:
            return res.json({
                auth: false,
                message: "Unauthorized"
            })
        default:
            next();
            break;
    }
}