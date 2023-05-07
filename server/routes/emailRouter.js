const express = require('express')
const router = express.Router()
const emailController = require("../controllers/emailController")

router.post('/file/:id', emailController.sendEmailOfFile)

router.post('/warning', emailController.sendEmailOfWarning)

module.exports = router
