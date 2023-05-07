
const db = require('../models/index')
const Folder = db.folder

class FolderDataAccessor {
    db;
    Folder;

    constructor() {
        this.init();
    }

    init = async () => {
         this.db = db;
         this.collection = Folder;
    }

    getAllFolders = async()=>{
        const folder = await Folder.findAll({})
        // If no notes
        if (!folder?.length) {
        return res.status(400).json({ message: 'No folder found' })
        }
        return folder;
    }

    addNewFolder = async (folderData) => {
        const folder = await Folder.create(folderData)
        if (folder) { // Created
            console.log("Created"+folder)// Created
            return folder;
        // return res.status(201).json({ message: 'New user created' })
        // } else {
        // return res.status(400).json({ message: 'Invalid user datareceived' })
        // }
        }
    }

    // getFolderById = async (id) => {
    //     const folder = await Folder.findOne({where:{id:id}})
    //     // return json(user)
    //     console.log(folder)
    //     return folder;
    // }

    getFolderByParentId = async (id) => {
        const folder = await Folder.findAll({where:{parentId_category:id}})
        console.log("___________44___________")
        console.log(folder)
        console.log("____________33__________")

        // return json(user)
        return folder;
    }
    
    updateFolder = async (id, newid, name, parentid,userid) => {
        const folder = await Folder.update({newid, name, parentid,userid},{where:{id:id}})
        if (!folder) {
        return res.status(400).json({ message: 'folder not found' })
        }
        return `folder with ID ${id} updated`
    }

    

    deleteFolder = async (id) => {
        await Folder.destroy({
        where: {
        id: id
        }
        });
        return `folder with ID ${id} deleted`
        }
   
}

const folderDataAccessor = new FolderDataAccessor();
module.exports = folderDataAccessor;