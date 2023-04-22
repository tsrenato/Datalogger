require('dotenv').config();
const { Sequelize } = require("sequelize");

const connection = new Sequelize({
        dialect: 'sqlite',
        storage: './database/db.sqlite',
    });

connection.authenticate()
    .then(() => console.log('Database connection has been successfully established.'))
    .catch(() => console.log('Database connection failure.'));

exports.DB = connection;