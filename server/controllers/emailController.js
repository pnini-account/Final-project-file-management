const userController=require("./userController")
const fileController=require("./fileController")
const userDal = require('../dal/userDal')
const email = require("../utils/email");
//שליחה למייל
class SendToemail {

    sendEmail = (to, subject, massege) => {
        //טיפול בתוכן המייל - מסמך/ אזהרה
        // email('36213259948@mby.co.il', 'I love you', 'How are you?');
        email(to, subject, massege);
    }

    sendEmailOfWarning = (warning) => {
        const user = warning.user_id;
        const to = userController.getUserById(user).email;
        if (!to) {
            return 'not defined email'
        }
        const file = warning.file_id;
        file_name = fileController.openFile(file).name;
        massege = `You have a warning of file: ${file_name}
         ${warning.text}`
        sendEmail(to, "warning from FileManegment", massege)
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
        this.sendEmail('36326036654@mby.co.il', subject, massege)
        res.send("ok 😂🤣😎🙂😑")
    }
}
const SendEmail = new SendToemail();
module.exports = SendEmail;

