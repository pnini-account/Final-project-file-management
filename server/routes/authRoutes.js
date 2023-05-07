const express = require('express')
const router = express.Router()
const authController = require("../controllers/authController")
const verifyJWT = require("../middleware/verifyJWT")

router.post('/register', authController.register)
//router.post('/login', authController.login)
// router.route('/login')
    //.post(verifyJWT, authController.login)
router.post('/login', authController.login)

module.exports = router
