const { sequelize, DataTypes } = require("./sequelize");
const User = sequelize.define(
    "user",
    {
    id: {
    type: DataTypes.INTEGER,    
    autoIncrement:true,
    allowNull: false,
    primaryKey: true,
    uniqe: true
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    email: {
    type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
        },
    warningsId:{
        type: DataTypes.INTEGER,
    },
    filesId:{
        type:DataTypes.INTEGER
    },
    foldersId:{
        type:DataTypes.INTEGER
    },
    categoriesId:{
        type:DataTypes.INTEGER
    }
    },
    {
    timestamps: false,
    }
    );
module.exports = User;

    