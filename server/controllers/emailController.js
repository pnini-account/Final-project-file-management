const userController=require("./userController")
const fileController=require("./fileController")
const fileDal = require("../dal/fileDal")
const userDal = require('../dal/userDal')
const email = require("../utils/email");
const paath = require("path")
//שליחה למייל
class SendToemail {

    sendEmail = (to, subject, massege, filename) => {
        //טיפול בתוכן המייל - מסמך/ אזהרה
        // email('36213259948@mby.co.il', 'I love you', 'How are you?');
        console.log(filename)
        const name = "112dbf62-d337-4a3f-a3e8-d37b55bb6948_java_web_application.pdf"
        const path = paath.join(__dirname,".." ,"public","files",name)
        console.log("path"+path);
        const typeOfFile = name.split(".")
        console.log(typeOfFile[1]);

        // "C:\Users\213259948\Desktop\file--management\server\public\files\c.png"
        email(to, subject, massege, filename, path, typeOfFile[1]);
    }

    sendEmailOfWarning = async (req,res) => {
        const warningId = req.params.id;
        const to = await userDal.getUserById(req.user.id);        
        if (!to) {
            return 'not defined email'
        }
        console.log("to"+to.email);
        const file =req.body.fileId;
        const text =req.body.text;
        const file_name = await fileDal.openFile(file);
        console.log("file_name"+file_name.name);
        console.log("file"+file)
        console.log("req.text"+text);
        const massege = `You have a warning of file ${file_name.name}: ${text}`
        this.sendEmail(to.email, "warning from FileManegment", massege, file_name.name)
    }

    sendEmailOfFile = async (req,res) => {
        const file = req.body;
        const to = await userDal.getUserById(req.user.id);        
        console.log(to);
        if (!to) {        
            console.log("😂🤣😎🙂😑");
            return 'not defined email'
        }
        console.log(to);
        const massege = file.message;
        const subject = file.subject;
       // const path = file.url;
        this.sendEmail('36326036654@mby.co.il', subject, massege, filename)
        res.send("ok 😂🤣😎🙂😑")
    }
}
const SendEmail = new SendToemail();
module.exports = SendEmail;

