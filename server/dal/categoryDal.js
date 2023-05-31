
const { folder } = require('../models/index');
const db = require('../models/index')
const Category = db.category
const Folder=db.folder
const folderDal =require('./folderDal')


class CategoryDataAccessor {
    db;
    Category;

    constructor() {
        this.init();
    }

    init = async () => {
        this.db = db;
        this.Category = Category;
    }

    getAllCategorys = async () => {
        // Get all notes from DB
        const category = await Category.findAll({})
        console.log("getAllCategorys")
        // If no notes
        if (!category?.length) {
            // return res.status(400).json({ message: 'No category found' })
            return 'No category found';
        }
        return category;
    }  

    addNewCategory = async (categoryData) => {
        const category = await Category.create(categoryData)
        if (category) { // Created
            return category;
            // return res.status(201).json({ message: 'New user created' })
            // } else {
            // return res.status(400).json({ message: 'Invalid user datareceived' })
            // }
        }
    }

    getAllCategorysForUser = async (id) => {
        console.log("getAllCategorysForUser");
        console.log("id"+id)
        const category = await Category.findAll({ where: { userId: id } })
        // return json(user)
        console.log(category)
        return category;
    }

    updateCategory = async (id , color, img, text ) => {
        console.log("in update");
        console.log({text});  

        const category = await Category.update({ color, img, text  }, { where: { id: id } })
        if (!category) {
            return res.status(400).json({ message: 'folder not found' })
        }
        console.log("in ok");

        return `category with ID ${id} updated`
    }

    deleteCategory = async (id) => {

        const folders = await Folder.findAll({
            where: {
                parentId_folder: id
            }
        });
        console.log(folders[0]);



         await Promise.all(folders.map(async (f) => { 
            return await folderDal.deleteFolder(f.id); 
          })) 
        
        await Category.destroy({
            where: {
                id: id
            }
        });
        return `category with ID ${id} deleted`
    }
 
    
}

const categoryDataAccessor = new CategoryDataAccessor();
module.exports = categoryDataAccessor;