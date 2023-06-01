const express = require("express");
console.log("warningRouter")
const warningController = require("../controllers/warningController");

const warningRouter = express.Router();

warningRouter.route("/")
    .get(warningController.getAllWarnings)
    // .post(warningController.addNewWarning);
    .delete(warningController.deleteWarning);

warningRouter.route("/:id")
    .post(warningController.addNewWarning)
    .get(warningController.getWarningByWarningID)//todo:להפריד בין כל האזהרות לאזהרות בתוקף
    .put(warningController.updateWarning)//todo:הפרדת העדכונים 
    .delete(warningController.deleteWarning);
module.exports = warningRouter;


