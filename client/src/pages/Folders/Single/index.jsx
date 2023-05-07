
// //ניגש לסרבר ונקבל תיקיות וקבצים
// //folders.map(f=> <Folder folder={f}/>)
// //files.map(file=><File file={file}/>)




import * as React from 'react';

import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FolderItem from '../Item';
import AddFoler from '../AddFolder';
// import AddFile from '../../Files/AddFile';




export default function SingleFolder(props) {
    const navigate = useNavigate();
    const [unauthorized, setUnauthorized] = useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);
    const token = sessionStorage.getItem("token");
    const [ListOfFolders, setListOfFolders] = useState([]);
    const [ListOfFiles, setListOfFiles] = useState([]);

    const { id } = useParams()
    const [hasFolders, setHasFolders] = useState(false)
    const [hasFiles, setHasFiles] = useState(false)

    useEffect(() => {
        GetAllFolders();
        GetAllFiles();
    }, [])
    const addNewFile=(folder)=>{
        setListOfFolders([...ListOfFolders, folder])
    }
    const GetAllFolders = async () => {
        console.log(id)
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
            setOk(true)
            setListOfFolders(data)
            console.log(ListOfFolders)
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
        const responseOfFile = await fetch(`http://localhost:3600/api/file/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            }
        })

        if (responseOfFile.ok) {
            const data = await responseOfFile.json();


            console.log(data)
            setOk(true)
            setListOfFiles(data)
            setHasFiles(true)
        }
        else {
            setUnauthorized(true);
            const err = await responseOfFile.json();
            setErr(err.message);
            console.log(err.message)
        }



    }
    return (
        <>
            {/* <AddFile></AddFile> */} <AddFoler onAdd={addNewFile} ></AddFoler>
            {hasFolders ? <>{ListOfFolders.map((i) => <FolderItem key={i.id} folder={i}></FolderItem>)}</> : <></>}
            {/* {hasFiles && <><AddFoler ListOfFolders={ListOfFolders} ></AddFoler> <>{ListOfFolders.map((i) => <FolderItem key={i.id} folder={i}></FolderItem>)}</></>} */}

        </>
    )
}



