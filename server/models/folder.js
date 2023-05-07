const { sequelize, DataTypes } = require("./sequelize");
const Folder = sequelize.define(
    "folder",
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
        name: {
            type: DataTypes.STRING,
        },
        parentId_category: {
            type: DataTypes.INTEGER,
        },
        parentId_folder: {
            type: DataTypes.INTEGER,
        },
        
        filesId: {
            type: DataTypes.INTEGER
        },
        foldersId: {
            type: DataTypes.INTEGER
        }

    },
    {
        timestamps: false,
    }
);
module.exports = Folder;
