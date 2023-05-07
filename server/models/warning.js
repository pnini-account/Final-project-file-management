const { sequelize, DataTypes } = require("./sequelize");
const Warning = sequelize.define(
    "warning",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        file_id: {
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.DATE,
        },
        text: {
            type: DataTypes.STRING,
        },
        snooze: {
            type: DataTypes.TINYINT,
        }, 
        is_read: {
            type: DataTypes.TINYINT,
            defaultValue: false
        }
    },
    {
        timestamps: false,
    }
);
module.exports = Warning;

