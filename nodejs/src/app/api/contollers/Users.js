const User = require('../../../domain/users/models/user');
const bcrypt = require('bcrypt');

module.exports = {
    /**
     * Display all users.
     * @param {*} req 
     * @param {*} res 
     */
    index: async (req, res) => {
        try {
            const users = User.findAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: 'Operation failed.' });
        }
    },
    /**
     * Show user by id.
     * @param {*} req 
     * @param {*} res 
     */
    show: async (req, res) => {
        try {
            const user = User.findByPk(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: 'Operation failed.' });
        }
    },
    /**
     * Inserts a new user.
     * @param {*} req 
     * @param {*} res 
     */
    store: async (req, res) => {
        try {
            const pwHash = bcrypt.hash(req.body.password, bcrypt.genSaltSync(8)); // use bcrypt.compare();
            const data = {
                email: req.body.email,
                password: pwHash,
            }
            await User.create(data);
            res.status(201).json({ message: 'User successfully created.' });
        } catch (err) {
            res.status(500).json({ message: 'Operation failed.' });
        }
    },
    /**
     * Update an user resgister.
     * @param {*} req 
     * @param {*} res 
     */
    update: async (req, res) => {
        try {
            await User.update({ email: req.body.email }, {
                where: {
                    id: req.params.id,
                }
            });
            res.status(200).json({ message: 'User email has been successfully updated.' });
        } catch (err) {
            res.status(500).json({ message: 'Operation failed.' });
        }
    },
    /**
     * Deletes an user by id.
     * @param {*} req 
     * @param {*} res 
     */
    destroy: async (req, res) => {
        try {
            await User.destroy({
                where: {
                    id: req.params.id,
                }
            });
        } catch (err) {
            res.status(500).json({ message: 'Operation failed.' });
        }
    },
}