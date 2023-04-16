const { DB } = require("../../../../config/database");


const options = {
    tableName: 'dataloggers',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

const Users = DB.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, options);


module.exports = Users;