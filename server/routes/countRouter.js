const express = require("express");

const countController = require("../controllers/countController");

const countRouter = express.Router();

    countRouter.route("/:id")
    .get(countController.getCount)
   

module.exports = countRouter;