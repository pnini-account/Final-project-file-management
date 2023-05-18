
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
import { Grid } from '@mui/material';
import ResponsiveAppBar from '../../../components/Navbar';
import SearchComp from '../../../components/Search';



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
    const addNewFolder = (folder) => {
        setListOfFolders([...listOfFolders, folder])
    }
    const GetAllFolders = async () => {
        const responseOfFolder = await fetch(`http://localhost:3600/api/category/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            }
        })

        if (responseOfFolder.ok) {
            const data = await responseOfFolder.json();
            // console.log(data)
            setOk(true)
            setListOfFolders(data)
            // console.log(listOfFolders)
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
            <ResponsiveAppBar></ResponsiveAppBar>
            <SearchComp></SearchComp>
            <AddFoler onAdd={addNewFolder} />
            {/* <AddFile onAdd={addNewFile} /> */}
            <Grid container spacing={1}>
                {hasFolders && <><>{listOfFolders.map((i) => <Grid item xs={4}> <FolderItem key={i.id} folder={i}></FolderItem></Grid>)}</></>}
            </Grid>
        </div>
    )
}



