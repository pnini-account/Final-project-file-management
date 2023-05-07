const userDal = require("../dal/userDal");

class userController {

    getAllUsers = async (req, res) => {
        // Get all notes from DB
        res.send(await userDal.getAllUsers());
    }

    addNewUser = async(req, res) => {
        const userData = req.query
        // Confirm data
        if (!userData) {
        return res.status(400).json({ message: 'All fields are required'})
        }
        res.send(await userDal.addNewUser(userData));
    }

    getUserById = async(req, res) => {
        //לפני השילוב
    //    const id = req.params.id;
    //    const user = req.body;
    //    console.log(user)
    //    const id = user.user_id;
    //    const a = await userDal.getUserById(id)
    //    console.log(a)
    //    res.json(a);
    const id = req.params.id;
    res.json(await userDal.getUserById(id));
    }

    updateUser = async(req, res) => {
        const id  = req.params.id;
        const { newid, name, email, password } = req.query   
        // Confirm data
        if (!id) {
        return res.status(400).json({ message: 'Id fields are required'
        })
        }
        res.send(await userDal.updateUser(id ,newid, name, email, password ));  
    }

    deleteUser = async(req, res) => {
        const id  = req.params.id;
        // Confirm data
        if (!id) {
        return res.status(400).json({ message: 'user ID required' })
        }
        // var id = req.params.id;
        res.send(await userDal.deleteUser(id)); 
    }
}

const usercntroller = new userController();
module.exports = usercntroller;
