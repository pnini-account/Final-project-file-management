const categoryDal = require("../dal/categoryDal");
const FolderDal = require("../dal/folderDal")
const FileDal = require("../dal/fileDal")
class CountController {
    getUrlArray = async (req, res) => {

        async function getCategoryToUrl(id) {
            console.log("getCategoryToUrl");
            const category = await categoryDal.getCategory(id);
            const c = { name: category.text, type: 1, id: category.id }
            return c;
        }
        async function getFoldersToUrl(id) {
            const folder = await FolderDal.getFolder(id);
            const f = { name: folder.name, type: 2, id: folder.id }
            return f;

        }
        async function getFolderUrl(id, url) {
            const fol = await FolderDal.getFolder(id);
            if (fol.parentId_category) {
                
                const idCategory = fol.parentId_category;
                const c = await getCategoryToUrl(idCategory)
                url.push(c);
              
                const f = await getFoldersToUrl(id);
                url.push(f); 
              
                return url;
            }
            else{
            url = await getFolderUrl(fol.parentId_folder, url);
            const f =await getFoldersToUrl(id);
            url.push(f);
            return url;}
        }
        const type = req.body.type;
        const id = req.params.id;
        var url = [];
        console.log({id});
        if (type === 1) {
            const c = await getCategoryToUrl(id)
            console.log({ c });
            url.push(c)
            console.log({ url });
        }
        if (type === 2) {
            url = await getFolderUrl(id, url)
        }
        if (type === 3) {
            const file = await FileDal.getFile(id)
            url = await getFolderUrl(file.folderId, url)
            console.log({ url });
            const f = { name: file.name, type: 3, id: file.id }
            url.push(f)
        }
        console.log({ url });
        res.json(url);

    }
}

const countController = new CountController();
module.exports = countController;