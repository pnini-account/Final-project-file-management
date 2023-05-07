const folderDal = require("../dal/folderDal");

class FolderController {

    getAllFolders = async (req, res) => {
        // Get all notes from DB
        res.send(await folderDal.getAllFolders());
    }
    
    addNewFolder = async(req, res) => {
        const folderData = req.body
        folderData["user_id"]=req.user.id
        // Confirm data
        if (!folderData) {
        return res.status(400).json({ message: 'All fields are required'})
        }
       res.send(await folderDal.addNewFolder(folderData));
    }

    getFolderByParentId = async(req, res) => {
       const id = req.params.id;
       console.log(id)
       res.json(await folderDal.getFolderByParentId(id));
    }

    updateFolder = async(req, res) => {
        const id  = req.params.id;
        const { newid, name, parentid,userid } = req.query   
        // Confirm data
        if (!id) {
        return res.status(400).json({ message: 'Id fields are required'
        })
        }
        res.send(await folderDal.updateFolder(id, newid, name, parentid,userid ));  
    }

    deleteFolder = async(req, res) => {
        const id  = req.params.id;
        // Confirm data
        if (!id) {
        return res.status(400).json({ message: 'folder ID required' })
        }
        // var id = req.params.id;
        res.send(await folderDal.deleteFolder(id)); 
    }
}

const folderController = new FolderController();
module.exports = folderController;
