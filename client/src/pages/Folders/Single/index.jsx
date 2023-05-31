/////////////single
// //ניגש לסרבר ונקבל תיקיות וקבצים
// //folders.map(f=> <Folder folder={f}/>)
// //files.map(file=><File file={file}/>)




import * as React from 'react';

import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FolderItem from '../Item';
import FileItem from '../../Files/Item';
import AddFoler from '../AddFolder';
import AddFile from '../../Files/AddFile';
import { Grid } from '@mui/material';
import DeleteFile from '../../Files/file/delete';
import Breadcrumb from '../../../components/bread';
import ResponsiveAppBar from '../../../components/Navbar';
import SearchComp from '../../../components/Search';


export default function SingleFolder(props) {
    const navigate = useNavigate();

    const token = sessionStorage.getItem("token");
    const [listOfFolders, setListOfFolders] = useState([]);
    const [listOfFiles, setListOfFiles] = useState([]);
    const [hasFolders, setHasFolders] = useState(false)
    const [hasFiles, setHasFiles] = useState(false)
    const [clean, setClean] = useState(true)
    const [userFolders, setUserFolders] = useState([]);
    const [userCategoris, setUserCategoris] = useState([]);
    const { id } = useParams()
    const [breadcrumcs, setBreadCrumb] = useState([])
    const [currentBreadCrumb, setCurrentBreadCrumb] = useState({})
    const cleanFunc = () => {
        setClean(false)
    }

    const addNewFolder = (folder) => {
        setListOfFolders([...listOfFolders, folder])
    }
    const addNewFile = (file) => {
        setListOfFolders([...listOfFiles, file])

        // console.log("indexS" + file)
        // if (listOfFiles) { setListOfFiles([...listOfFiles, file]) }
        // else setListOfFiles([file])

    }
    const deleteFile = (file) => {
        const del = listOfFiles.indexOf(file);
        const newListOfFiles = listOfFiles.slice(del, 1)
        setListOfFiles(newListOfFiles);
        if (listOfFiles.length === 0) {
            setHasFiles = false
        }

    }


    useEffect(() => {
        const GetAllFoldersFiles = async () => {
            const responseOfFolderFilse = await fetch(`http://localhost:3600/api/folder/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`

                }
            }).then(console.log("folder", id))


            if (responseOfFolderFilse.ok) {
                const data = await responseOfFolderFilse.json();
                setListOfFolders(data.allFolders)
                setListOfFiles(data.allFiles)
                if (data.allFiles.length !== 0) {
                    setHasFiles(true)
                }
                if (data.allFolders.length !== 0) {
                    setHasFolders(true)
                }
            }

            else {

                const err = await responseOfFolderFilse.json();
                console.log(err.message)
            }

        }
        const getAllItemsForUser = async () => {
            const allItems = await fetch(`http://localhost:3600/api/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`

                }
            })

            if (allItems.ok) {
                const data = await allItems.json();
                console.log(data.allCategories + 'before set');
                setUserCategoris(data.allCategories)
                setUserFolders(data.allFolders)
                // console.log('after set'+ userCategoris );
            }

            else {

                const err = await allItems.json();

                console.log(err.message)
            }

        }
        GetAllFoldersFiles()
        getAllItemsForUser()

    }, [id])

    useEffect(() => {
        console.log({ userCategoris });
        console.log({ userFolders });
        const folder = userFolders.find(f => f.id == id);
        console.log({ folder });
        if (folder) {
            setBreadCrumb([folder])
            setCurrentBreadCrumb(folder)
        }
    }, [userFolders, userCategoris])

    useEffect(() => {
        if (breadcrumcs.length !== 0) {
            console.log(breadcrumcs.length !== 0);
            console.log({ breadcrumcs });
            console.log({ currentBreadCrumb });
            console.log({ breadcrumcs });
            

            if (currentBreadCrumb.parentId_category===null) 
            {
                breadcrumcs.push(userFolders.find(f => f.id === currentBreadCrumb.parentId_folder))
                setCurrentBreadCrumb(userFolders.find(f => f.id === currentBreadCrumb.parentId_folder))
            }
            breadcrumcs.push(userCategoris.find(f => f.id === currentBreadCrumb.parentId_category))
            console.log(breadcrumcs.length !== 0);
            console.log({ breadcrumcs });
            console.log({ currentBreadCrumb });
            console.log({ breadcrumcs });
        }

        else
        console.log("loooooooooooooooooooooooozer");
    }, [currentBreadCrumb])

    return (
        <><h1>{id}</h1>
            <Breadcrumb breadcrumcs={breadcrumcs} />
            <ResponsiveAppBar />
            <SearchComp />
            <AddFile onAdd={addNewFile} />
            <AddFoler onAdd={addNewFolder} fatherType='f' />
            {/* <Grid container spacing={1}>
                {hasFolders && listOfFolders.map((i, ind) => <Grid key={ind} item xs={4}> <FolderItem key={ind} folder={i} setGetIntoFolder={setGetIntoFolder}></FolderItem></Grid>)}
            </Grid>
            <Grid container spacing={1}>
                {hasFiles&& listOfFiles.map((i, ind) => <Grid key={ind} item xs={4}><FileItem key={ind} file={i} /></Grid>) }
            </Grid> */}
            {clean && <>{hasFolders ? listOfFolders.map((i, ind) => <Grid key={ind} item xs={4}> <FolderItem key={ind} folder={i}></FolderItem></Grid>) : <></>}
                {hasFiles ? listOfFiles.map((i, ind) => <Grid key={ind} item xs={4}><FileItem key={ind} file={i} ></FileItem></Grid>) : <></>}</>}

        </>
    )
}