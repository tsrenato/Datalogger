const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        if (req.headers.authorization.replace('Bearer ', '') == process.env.API_TOKEN)
            return next();

        const token = jwt.verify(req.headers.authorization.replace('Bearer ', ''), process.env.JWT_SECRET);

        if (token)
            return next();
        else
            throw new Error('Unauthorized.');

    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: 'Unauthorized.' });
    }
}