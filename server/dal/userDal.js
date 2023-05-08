// const con = require("./mySql");
// const dbName = 'files_directory';
// const collectionName = "users"


const db = require('../models/index')
const User = db.user

// @desc Get all notes
// @route GET /notes
// @access Private
class UserDataAccessor {
    db;
    User;

    constructor() {
        this.init();
    }

    init = async () => {
         this.db = db;
         this.User = User;
    }

    getAllUsers = async()=>{
        const users = await User.findAll({})
        // If no notes
        if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
        }
        // return res.json(users)
        return users;
    }

    addNewUser = async (userData) => {
        const user = await User.create(userData)
        if (user) { // Created
            return 'New user created'
        // return res.status(201).json({ message: 'New user created' })
        // } else {
        // return res.status(400).json({ message: 'Invalid user datareceived' })
        // }
        }
    }
    
    // addNewUser = async(userData) => {
    //      await con.query("INSERT INTO `"+this.db+"`.`"+this.collection+"` (`idusers`, `name`, `email`,`password`) VALUES('"+userData.id+"','"+userData.name+"','"+userData.email+"','"+userData.password+"');")
    // }

    getUserById = async (id) => {
        const user = await User.findOne({where:{id:id}})
        // return json(user)
        return user;
    }
    // getUserById = (id) => {
    //       return new Promise((resolve, reject) => {
    //         con.query("SELECT * FROM `"+this.db+"`.`"+this.collection+"` WHERE idusers = '"+id+"'", function (err, result){
    //         if (err) throw err;
    //         console.log(id);        
    //         console.log(result);        
    //         resolve(result);
    //       }); 
    //       })
    // }

    // getUserById = async(id) => {
    //     await con.query("SELECT * FROM `"+this.db+"`.`"+this.collection+"`WHERE idusers = ?",[parseInt(id)], function (err, result) {
    //         if (err) throw err;
    //         console.log(id);        
    //         console.log(result);        
    //         return result;
    //         //todo:לשלוח אישור לclient
    //       });
    // }

    updateUser = async (id, name, email, password ) => {
        const user = await User.update({ name, email, password},{where:{id:id}})
        if (!user) {
        return res.status(400).json({ message: 'user not found' })
        }
        return `user with ID ${id} updated`
    }

    // updateUser=(id,userData)=>{
    //     return new Promise((resolve, reject) => {
    //         if(userData.name){
    //             con.query("UPDATE `"+this.db+"`.`"+this.collection+"` SET name = '"+userData.name+"' WHERE idusers = '"+id+"'", function (err, result) {
    //                 if (err) throw err;
    //                 }); 
    //         }
    //         if(userData.email){
    //             con.query("UPDATE `"+this.db+"`.`"+this.collection+"` SET email = '"+userData.email+"' WHERE idusers = '"+id+"'", function (err, result) {
    //                 if (err) throw err;
    //                 }); 
    //         }
    //         if(userData.password){
    //             con.query("UPDATE `"+this.db+"`.`"+this.collection+"` SET password = '"+userData.password+"' WHERE idusers = '"+id+"'", function (err, result) {
    //                 if (err) throw err;
    //                 }); 
    //         }
    //         resolve("update user")
    //     })
    // }

    deleteUser = async (id) => {
        await User.destroy({
        where: {
        id: id
        }
        });
        return `user with ID ${id} deleted`
    }
    // deleteUser=(id)=>{
    //         return new Promise((resolve, reject) => {
    //             con.query("DELETE FROM `"+this.db+"`.`"+this.collection+"` WHERE idusers = '"+id+"'", function (err, result) {
    //             if (err) throw err;
    //             }); 
    //             resolve("delete user")
    //         })
    // }
}


const userDataAccessor = new UserDataAccessor();
module.exports = userDataAccessor;
