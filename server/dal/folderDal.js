const fileDal = require("./fileDal");
const db = require('../models/index')
const { Op } = require("sequelize")
const Folder = db.folder
const File = db.file

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

    getAllFoldersForUser = async (id) => {
        const folder = await Folder.findAll({ where: { user_id: id } })
        // If no notes
        if (!folder?.length) {
            return res.status(400).json({ message: 'No folder found' })
        }
        return folder;
    }

    addNewFolder = async (folderData) => {
        const folder = await Folder.create(folderData)
        if (folder) { // Created
            console.log("Created" + folder)// Created
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

    getFoldersByParentIdFolder = async (id) => {
        const folder = await Folder.findAll({ where: { [Op.or]: { parentId_folder: id }} })

        console.log("666666666666666666666666666666")
        console.log(folder)
        console.log("77777777777777777777777777777777")

        // return json(user)
        return folder;
    }
    getFoldersByParentIdCategory = async (id) => {
        const folder = await Folder.findAll({ where: { [Op.or]: { parentId_category: id } } })

        console.log("___________44___________")
        console.log(folder)
        console.log("____________33__________")

        // return json(user)
        return folder;
    }

    updateFolder = async (id,  name, parentid, userid) => {
        const folder = await Folder.update({ name, parentid, userid }, { where: { id: id } })
        if (!folder) {
            return res.status(400).json({ message: 'folder not found' })
        }
        return `folder with ID ${id} updated`
    }



    deleteFolder = async (id) => {
        console.log("start delete"+id);
        const files = await File.findAll({
            where: {
                folderId: id
            }
        });
        files.map(async (f) => await fileDal.deleteFile(f.id));
        console.log("after delete files");

        const folders = await Folder.findAll({
            where: {
                parentId_folder: id
            }
        });
        console.log(folders[0]);



         await Promise.all(folders.map(async (f) => { 
            return await this.deleteFolder(f.id); 
          })) 


       
           
        await Folder.destroy({
            where: {
                id: id
            }
        });
        console.log("finish  delete");


        return `folder with ID ${id} deleted`}
    }



const folderDataAccessor = new FolderDataAccessor();
module.exports = folderDataAccessor;