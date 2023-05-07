const express = require("express");

const categoryController = require("../controllers/categoryController");

const categoryRouter = express.Router();
console.log("categoryRouter")
categoryRouter.route("/")
    //.get(categoryController.getAllCategorys)
    .post(categoryController.addNewCategory)
    .get(categoryController.getAllCategorysForUser)
categoryRouter.route("/:id")
   
    .patch(categoryController.updateCategory)//todo:להפריד עדכון של שם, תמונה וצבע... 
    //todo:searchCategory function
    .delete(categoryController.deleteCategory);

module.exports = categoryRouter;