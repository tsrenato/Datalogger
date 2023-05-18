const { DataTypes } = require('sequelize');
const { DB } = require('../../../../config/database');

const options = {
    tableName: 'dataloggers',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

const DataLogger = DB.define('DataLogger', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    log_interval: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
    },
}, options);

// relations here

// DataLogger.associate = models => {
//     DataLogger.hasMany(models.Log, {
//         foreignKey: 'datalogger',
//         as: 'logs',
//     });
// }

// DataLogger.hasMany(Log, {
//     foreignKey: 'datalogger',
// });

module.exports = DataLogger;