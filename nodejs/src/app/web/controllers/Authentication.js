const bcrypt = require('bcrypt');
const Users = require('../../../domain/users/models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    signIn: async (req, res) => {
        try {
            const user = await Users.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            message: 'Operation failed.'
                        });
                    } else if (isMatch) {
                        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
                            expiresIn: 1800
                        });
                        return res.status(200).json(token);
                    } else {
                        return res.status(401).json({
                            message: 'Unauthenticated. Please, verify your credentials.'
                        });
                    }
                });
            }

            if (!user) return res.status(404).json({
                message: 'User not found.'
            });

        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Operation failed.'
            });
        }
    },

}