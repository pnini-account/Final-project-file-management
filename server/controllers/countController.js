const categoryDal = require("../dal/categoryDal");
class CountController {

    getCount = async(req, res)=>{
        const id=req.params.id;
        res.json(await categoryDal.getCountOfCategory(id));
    }}

    const countController = new CountController();
    module.exports = countController;