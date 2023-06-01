
const fsPromises = require("fs").promises
const path = require("path")
const fileDal = require("../dal/fileDal")
const { v4: uuid } = require("uuid")

const upload = async (req, res) => {
    console.log("upload C")
    if (!req.file) {
        res.status(500).send("No file")
    }
    const file = req.file
    const name = req.body.name
    console.log(req.body.name);
    const folder = path.join(__dirname,".." ,"public","files")
    console.log(folder)
   
    var filename = `${uuid()}_${req.file.originalname}` 
    if(name){
        filename=`${uuid()}_${name}`
    }
    const fileUrl = `${folder}\\${filename}`
    console.log(fileUrl)
    console.log("try")
    try {

        console.log("try")
        await fsPromises.writeFile(fileUrl, req.file.buffer)
        const idFolder = req.body.idFolder;
        console.log(idFolder)
        const fileData = {name:filename,url:fileUrl,folderId:idFolder, userId:req.user.id};
        console.log(fileData)
        const fileCreated = await fileDal.addNewFile(fileData);
        return res.json({ location: fileUrl, name: filename })
    } catch (err) {
        console.log("catch")

        
        res.status(500).send(err)
    }
    res.send("test")
}


module.exports = { upload }