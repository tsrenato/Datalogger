const { DB } = require("../../../../config/database");


const options = {
    tableName: 'dataloggers',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

const Log = DB.define('Log', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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