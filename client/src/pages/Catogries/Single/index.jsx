
// //ניגש לסרבר ונקבל תיקיות וקבצים
// //folders.map(f=> <Folder folder={f}/>)
// //files.map(file=><File file={file}/>)




import * as React from 'react';

import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../List/Item';
import FolderItem from '../../Folders/Item';
import AddFoler from '../../Folders/AddFolder';
import AddCategory from '../List/AddCategory';




export default function SingleCategory(props) {
    const navigate = useNavigate();
    const [unauthorized, setUnauthorized] = useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);
    const token = sessionStorage.getItem("token");
    const [listOfFolders, setListOfFolders] = useState([]);
    const { id } = useParams()
    const [hasFolders, setHasFolders] = useState(false)
    useEffect(() => {
        GetAllFolders();
    }, [])
    const addNewFile=(folder)=>{
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
            setOk(true)
            setListOfFolders(data)
            console.log(listOfFolders)
            setHasFolders(true)
        }
        else {
            setUnauthorized(true);
            const err = await responseOfFolder.json();
            setErr(err.message);
            console.log(err.message)
        }



    }
    return (
        <div>

<AddFoler onAdd={addNewFile}/>

            {hasFolders && <><>{listOfFolders.map((i) => <FolderItem key={i.id} folder={i}></FolderItem>)}</></>}

        </div>
    )
}



