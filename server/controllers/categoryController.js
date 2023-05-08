const categoryDal = require("../dal/categoryDal");
const folderDal = require("../dal/folderDal")
class categoryController {

    getAllCategorys = async(req, res)=>{
        res.send(await categoryDal.getAllCategorys());
    }
    
    addNewCategory = async(req, res) => {
        const categoryData = req.body
        categoryData["userId"]=req.user.id
        // Confirm data
        if (!categoryData) {
        return res.status(400).json({ message: 'All fields are required'})
        }
        res.send(await categoryDal.addNewCategory(categoryData));
    }

    getAllCategorysForUser = async(req, res) => {
        console.log("getAllCategorysForUser");
        //const id = req.params.id;
        const id = req.user.id;
        res.json(await categoryDal.getAllCategorysForUser(id));
    }

    getAllFoldersForCategory=async(req,res)=>{
        const id = req.params.id;
        console.log("++++++++++++++++++++")
        console.log(id)
        console.log("++++++++++++++++++++")

        res.json(await folderDal.getFoldersByParentId(id)); 
    }

    updateCategory = async(req, res) => {
        const id  = req.params.id;
        const { newid, color, img, text  } = req.query   
        // Confirm data
        if (!id) {
        return res.status(400).json({ message: 'Id fields are required' })
        }
        res.send(await categoryDal.updateCategory(id ,newid, color, img, text ));  
    }

    deleteCategory = async(req, res) => {
        const id  = req.params.id;
        // Confirm data
        if (!id) {
        return res.status(400).json({ message: 'user ID required' })
        }
        // var id = req.params.id;
        res.send(await categoryDal.deleteCategory(id)); 
    }
}

const categorycontroller = new categoryController();
module.exports = categorycontroller;
