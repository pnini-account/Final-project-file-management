
// //ניגש לסרבר ונקבל תיקיות וקבצים
// //folders.map(f=> <Folder folder={f}/>)
// //files.map(file=><File file={file}/>)
import * as React from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Folder from '../../Folder/List'
import AddFoler from './AddFolder';
import FolderItem from './Item';
import FileItem from '../Files/Item';
import { Grid } from '@mui/material';
import ResponsiveAppBar from '../../components/Navbar';
import SearchComp from '../../components/Search';
import AddFile from '../Files/AddFile';
export default function Single(props) {

    const navigate = useNavigate();
   
    const token = sessionStorage.getItem("token");

    const [listOfFolders, setListOfFolders] = useState([]);
    const [listOfFiles, setListOfFiles] = useState([]);

    const { id } = useParams()
    const [hasFolders, setHasFolders] = useState(false)
    const [hasFiles, setHasFiles] = useState(false)
    const [clean, setClean] = useState(true)

    useEffect(() => {
        GetAllFoldersFiles();
    })

    const cleanFunc = () => {
        setClean(false)
    }

    const addNewFolder = (folder) => {
        setListOfFolders([...listOfFolders, folder])
    }

    const addNewFile = (file) => {
      
        setListOfFolders([...listOfFiles, file])

        // console.log("folder" + file)
        // if (listOfFiles) { setListOfFiles([...listOfFiles, file]) }
        // else setListOfFiles([file])

    }
    const deleteFile = (file) => {
        const del = listOfFiles.indexOf(file);
        const newListOfFiles = listOfFiles.slice(del, 1)
        setListOfFiles(newListOfFiles);
        if (listOfFiles == []) {
            setHasFiles = false
        }

    }

    const GetAllFoldersFiles = async () => {
        const responseOfFolderFilse = await fetch(`http://localhost:3600/api/folder/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            }
        })

        if (responseOfFolderFilse.ok) {
            const data = await responseOfFolderFilse.json();
        
            setListOfFolders(data["allFolders"])
            console.log(listOfFolders)
            setListOfFiles(data["allFiles"])
            if (listOfFiles != []) {
                setHasFiles(true)
            }
            if (listOfFolders != []) {
                setHasFolders(true)
            }
        }
        else {
         
            const err = await responseOfFolderFilse.json();
            
            console.log(err.message)
        }

    }

    return (
        <>
          <ResponsiveAppBar></ResponsiveAppBar>
          <h1>דוגמא</h1>
          <SearchComp></SearchComp>
            <AddFoler onAdd={addNewFolder} />
            <AddFile onAdd={addNewFile} />
            {clean&&<>
            <Grid container spacing={1}>
{/* onDelete={deleteFile() } */}
                {hasFolders ? listOfFolders.map((i,ind) => <Grid key={ind} item xs={4}> <FolderItem key={ind} folder={i}></FolderItem></Grid>) : <></>}
                {hasFiles ? listOfFiles.map((i,ind) => <Grid key={ind} item xs={4}><FileItem key={ind} file={i} ></FileItem></Grid>) : <></>}</Grid></>}

            
        </>
    )
}
