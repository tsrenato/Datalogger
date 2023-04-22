require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}