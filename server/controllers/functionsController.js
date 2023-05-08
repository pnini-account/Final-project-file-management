const folderDal = require("../dal/folderDal");
const fileDal = require("../dal/fileDal");
const { Utils } = require("sequelize");
const email = require("../utils/email");
//const sendEmail = require("../utils/email");
const Warning = require("../models/warning");
const userController=require("./userController")
const fileController=require("./fileController")

class FunctionsController{
//כניסה לקטגוריה
 enterIntoCategory = async (id) => {
    allFolders = await (folderDal.getFoldersByParentId(id))
    if (!allFolders) {
        return res.status(400).json({ message: 'folder not found' })
    }
    return allFolders;
}
//כניסה לתיקייה 
 enterIntoFolder = async (req,res) => {
    const id=req.params.id;
     console.log(id)
    const allFolders = await (folderDal.getFoldersByParentId(id))
   
    const allFiles = await (fileDal.getFilesByParentId(id))
    // allFoldersFiles = allFolders.concat(allFiles)
    const allFoldersFiles={"allFolders":allFolders,"allFiles":allFiles}
    if (!allFoldersFiles) {
        return res.status(400).json({ message: 'folder or files not found' })
    }
    res.send(allFoldersFiles)
}
//כמה יש בכל תקייה
 countFolder = async (id) => {
    const allFoldersFiles = await enterIntoFolder(id)
    const count = allFoldersFiles.length;
    return count;
}


//הפעלת נודניק על אזהרה



//  לפי Id הצגת כל האזהרות 
 warningsById = async (user) => {
    return await Warning.findAll({
        where: { user_id: user.id }
    })
}

//הצגת אזהרות בתוקף
 warningsInValidity = async (user) => {
    const warningById = await warningsById(user);
    const datetime = new Date();
    date = datetime.toISOString().slice(0, 10);
    const result = warningById.filter(w => {w.date >= date && w.is_read==false});
    return result;
}

//הוספת טבלה דיפולטיבית
 addDefaultTable = async (user) => {
    const id = user.id;
    const defaultTable = await Category.findAll({ where: { default: true } })
    //foreach on an object?
    defaultTable.forEach(cat => {
        cat.userId = id;
        categoryControl.addNewCategory(cat);
    });
}
}
//הפעלת נודניק על אזהרה
const functionsController=new FunctionsController();
module.exports = functionsController;












