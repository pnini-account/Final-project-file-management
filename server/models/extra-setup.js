const { sequelize } = require("./sequelize");
const applyExtraSetup = () => {

////file////
const { file, folder,user,category} = sequelize.models;
file.belongsTo(user, { foreignKey: "user_id", as: "user_file" });
file.belongsTo(folder, { foreignKey: "parentId", as: "parent_file" });
user.hasMany(file, { foreignKey: "filesId", as: "files_user" });
folder.hasMany(file, { foreignKey: "filesId", as: "files_folder"});

////warning////

const { warning } = sequelize.models;
warning.belongsTo(user, { foreignKey: "user_id", as: "user_warning" });
warning.belongsTo(file, { foreignKey: "file_id", as: "file_warning" });
user.hasMany(warning, { foreignKey: "warningsId", as: "warnings_user" });
file.hasMany(warning, { foreignKey: "warningsId", as: "warnings_file" });

////folder////

folder.belongsTo(user, { foreignKey: "user_id", as: "user_folder" });
folder.belongsTo(category, { foreignKey: "parentId_category", as: "parent_folder_category" });
folder.belongsTo(folder, { foreignKey: "parentId_folder", as: "parent_folder" });;
user.hasMany(folder, { foreignKey: "foldersId", as: "folders_user" });
category.hasMany(folder, { foreignKey: "foldersId", as: "folders_category" });
folder.hasMany(folder, { foreignKey: "foldersId", as: "folders_folder" });

////category////

category.belongsTo(user, { foreignKey: "user_id", as: "user_category" });
user.hasMany(category, { foreignKey: "categoriesId", as: "categories_user" });
};

module.exports = {applyExtraSetup};
