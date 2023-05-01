const { DataTypes } = require("sequelize");
const { DB } = require("../../../../config/database");


const options = {
    tableName: 'logs',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

const Log = DB.define('Log', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    datalogger:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    temperature: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, options);


module.exports = Log;