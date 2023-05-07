const express = require("express");

const fileController = require("../controllers/fileController");

const fileRouter = express.Router();

fileRouter.route("/")
    .get(fileController.getAllfiles)
    .post(fileController.saveFile);

fileRouter.route("/:id")
    .get(fileController.openFile)
    //todo:searchFile function
    .delete(fileController.deleteFile)
    .patch(fileController.updateFile);//איך אני שולחת את ה - ID?

// fileRouter.route("/updatName/:id")
//     .put(fileController.updateNameFile);//todo:להפריד עדכון של שם ונתיב
    
// fileRouter.route("/updatPath/:id")
//     .put(fileController.updatePathFile);//todo:להפריד עדכון של שם ונתיב 

module.exports = fileRouter;