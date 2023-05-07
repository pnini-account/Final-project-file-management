const { sequelize, DataTypes } = require("./sequelize");
const File = sequelize.define(
    "file",
    {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
    name: {
    type: DataTypes.STRING,
    },
    url: {
    type: DataTypes.STRING,
    },
    folderId: {
        type: DataTypes.INTEGER,
        },
    userId: {
        type: DataTypes.INTEGER,
        },
    warningsId:{
        type: DataTypes.INTEGER,
    }
    },
    {
    timestamps: false,
    }
    );
module.exports = File;

    