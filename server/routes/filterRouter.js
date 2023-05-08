const express = require("express");

const filterController = require("../controllers/filterController");

const filterRouter = express.Router();

filterRouter.route("/:stringQuery")
    .get(filterController.getByQuery)
filterRouter.route('/')
.get(filterController.get)



module.exports = filterRouter;