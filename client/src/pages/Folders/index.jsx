
// //ניגש לסרבר ונקבל תיקיות וקבצים
// //folders.map(f=> <Folder folder={f}/>)
// //files.map(file=><File file={file}/>)
import * as React from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
// import Folder from '../../Folder/List'
import AddFoler from './AddFolder';
import FolderItem from './Item';
import FileItem from '../Files/Add';
import Breadcrumb from "../../components/bread";
import ResponsiveAppBar from "../../components/Navbar";
import Search from "./Search";
import FoldersFiles from "./foldersFiles";
// import AddFile from '../Files/AddFile';
export default function Single(props) {

    const navigate = useNavigate();
    const [unauthorized, setUnauthorized] = useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);
    const token = sessionStorage.getItem("token");

    const [listOfFolders, setListOfFolders] = useState([]);
    const [listOfFiles, setListOfFiles] = useState([]);

    const { id } = useParams()
    const [hasFolders, setHasFolders] = useState(false)
    const [hasFiles, setHasFiles] = useState(false)

    useEffect(() => {

        GetAllFolders();
        GetAllFiles();
    })
    useEffect(() => {
        console.log("im cateFolder")
        setHasFiles(true) ;
    }, [listOfFolders])

    const addNewFile = (folder) => {
        setListOfFolders([...listOfFolders, folder])
    }
    const GetAllFolders = async () => {
        const responseOfFolder = await fetch(`http://localhost:3600/api/folder/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            }
        })

        if (responseOfFolder.ok) {
            const data = await responseOfFolder.json();
            console.log(data)
            { console.log("lh") }
            setOk(true)
            setListOfFolders(data)
            setHasFolders(true)
        }
        else {
            setUnauthorized(true);
            const err = await responseOfFolder.json();
            setErr(err.message);
            console.log(err.message)
        }

    }
    const GetAllFiles = async () => {
        const responseOfFolder = await fetch(`http://localhost:3600/api/file/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            }
        })

        if (responseOfFolder.ok) {
            const data = await responseOfFolder.json();
            console.log(data)
            setOk(true)
            setListOfFiles(data)
            setHasFiles(true)
        }
        else {
            setUnauthorized(true);
            const err = await responseOfFolder.json();
            setErr(err.message);
            console.log(err.message)
        }
    }

        return (
            <>
                {/* <ResponsiveAppBar></ResponsiveAppBar>
                <Breadcrumb></Breadcrumb>
                <Search></Search> */}
                <AddFoler onAdd={addNewFile} />
                {console.log("father")}
                {/* <AddFile></AddFile> */}
                {hasFolders? listOfFolders.map((i) => <FolderItem key={i.id} folder={i}></FolderItem>) : <></>}
                {hasFiles? listOfFiles.map((i) => <FileItem key={i.id} file={i}></FileItem>) : <></>}
                {/* <FoldersFiles></FoldersFiles> */}
            </>
        )
    }
