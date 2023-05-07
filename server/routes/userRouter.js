const express = require("express");

const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/")
    .get(userController.getAllUsers)
    .post(userController.addNewUser)//TODO:In the funcion add the categoryDefultTable
    //.patch(userController.updateUser)
    //.delete(userController.deleteUser)
userRouter.route("/:id")
    .get(userController.getUserById)
    .patch(userController.updateUser)//todo:הפרדת העדכונים 
    .delete(userController.deleteUser);

module.exports = userRouter;


