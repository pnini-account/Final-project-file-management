const express = require("express");

const breadcrumbController = require("../controllers/breadcrumbController");

const breadcrumbRouter = express.Router();

breadcrumbRouter.route("/:id")
    .post(breadcrumbController.getUrlArray)
   

module.exports = breadcrumbRouter;