const db = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const addDefaultTable = require("../controllers/functionsController")


const User = db.user;
// const bcrypt= require('bcrypt');

const login = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const foundUser = await User.findOne({ where: { name: name } })

    if (!foundUser ) {
        return res.status(401).json({ message: 'no user, signup' })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) return res.status(401).json({ message: 'the password is uncorrect' })
    console.log("Logged In")


    const userInfo = {
        id: foundUser.id, name: foundUser.name,
        email: foundUser.email
    }

    //const accessToken = jwt.sign(userInfo,"לערבול סיסמא")
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)

    res.json({ accessToken: accessToken })    
    

}

const register = async (req, res) => {
    const {name, email, password } = req.body
    console.log(name)
    console.log(password)
    if (!name || !password ) {// Confirm data
        return res.status(400).json({ message: 'All fields are required' })
    }

    const duplicate = await User.findOne({ where: { name: name } })
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" })
    }
    const hashedPwd = await bcrypt.hash(password, 10)

    console.log("user")

    const userObject = {name, email, password: hashedPwd }

    const user = await User.create(userObject)
    if (user) { // Created
        //להוסיף טבלה דיפולטיבית
        //await addDefaultTable(user)
        return res.status(201).json({
            message: `New user ${user.name} created`
        })
    } else {
        return res.status(400).json({ message: 'Invalid user data received' })
    }


}

module.exports = { login, register }