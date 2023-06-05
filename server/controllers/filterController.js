const fileDal = require("../dal/fileDal");
const folderDal = require("../dal/folderDal");
const categoryDal = require("../dal/categoryDal");
const { file } = require("../models");

class FilterController { 
    getByQuery = async (req, res) => {
    const id=req.user.id
      var folders=await folderDal.getAllFoldersForUser(id);
      var files=await fileDal.getAllFilesForUser(id);
      var categories=await categoryDal.getAllCategorysForUser(id);
      var query=req.params.stringQuery;
      
     
        // console.log({folders})
        const result = typeof str === 'string' ? str.toLowerCase() : '';
// f.name===null||query===""||
        folders = folders.filter((f)=>f.name.toLowerCase().indexOf(query) > -1)
        files=files.filter((f)=>f.name.toLowerCase().indexOf(query) > -1)
        categories=categories.filter((c)=>c.text.toLowerCase().indexOf(query) > -1)   

        const filtered={"folders":folders,"files":files,"categories":categories}
        res.send(filtered);
    }
    get = async (req, res) => {
      res.send([])
    }

  
  }
const filterController=new FilterController;
module.exports=filterController;