const folderDal = require("../dal/folderDal");
const fileDal = require("../dal/fileDal");
//כניסה לתיקייה 

class fileAndFolder{
enterIntoFolder = async (id) => {
    const folderAndFile=[];
    allFolders = await (folderDal.getFoldersByParentId(id))
    allFiles = await (fileDal.getFilesByParentId(id))
    folderAndFile[folders]=allFolders;
    folderAndFile[files]=allFiles;

    
    if (!allFolders||!allFiles) {
        return res.status(400).json({ message: 'folder or files not found' })
    }
    return folderAndFile;
}
//כמה יש בכל תקייה
 countFolder = async (id) => {
    const allFoldersFiles = await enterIntoFolder(id)
    const count = allFoldersFiles.length;
    return count;
}}
const FileAndFolder = new fileAndFolder();
module.exports = FileAndFolder;