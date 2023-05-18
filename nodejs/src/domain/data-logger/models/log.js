const { DataTypes } = require("sequelize");
const { DB } = require("../../../../config/database");
const DataLogger = require("./datalogger");


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
    datalogger: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: DataLogger,
            key: 'id',
        }
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

// Log.associate = models => {
//     Log.belongsTo(models.DataLogger, {
//         allowNull: false,
//         foreignKey: 'datalogger',
//         targetKey: 'id',
//     });
// }

// Log.belongsTo(DataLogger, {
//     allowNull: false,
//     foreignKey: 'datalogger',
//     targetKey: 'id',
// });

module.exports = Log;