const { sequelize, DataTypes } = require("./sequelize");

const Category = sequelize.define(
        "category",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            color: {
                type: DataTypes.STRING,
            },
            img: {
                type: DataTypes.STRING,
            },
            text: {
                type: DataTypes.STRING,
            },
            default: {
                type: DataTypes.TINYINT,
            },
            userId: {
                type: DataTypes.INTEGER,
            },
            foldersId:{
                type:DataTypes.INTEGER
            }
        },
        {
            timestamps: false,
        }
    );
module.exports = Category;

