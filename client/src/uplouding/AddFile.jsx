import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import { useEffect, useState } from 'react'
import Categories from '.';
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import FolderItem from './Item';

export default function AddFile({onAdd,idFolder}) {
   
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [err, setErr] = useState(false);
    const [ok, setOk] = useState(false);
    const [unauthorized, setUnauthorized] = useState(false);
    const [file, setFile] = useState();
    useEffect(() => {
        onAdd(file) 
    }, [file])

    if(!idFolder){
        idFolder=id;
    }
    const addFileToDB = async (text) => {
        const token = sessionStorage.getItem("token");
        const responseOfFile = await fetch(`http://localhost:3600/api/file`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            },
            body: JSON.stringify({folderId:idFolder,name: text})
        })       

        if (responseOfFile.ok) {
            if (responseOfFile.ok) {
                
                setFile(await responseOfFile.json())
            }
            else {
                setUnauthorized(true);
                const err = await responseOfFile.json();
                setErr(err.message);
                console.log(err.message)
            }
        }
    }


    // const handleClickOpen = () => {
    //     console.log(id)
    //     navigate(`/UplaudFile${id}`)
    // };


    return (

        <>
          
            <Button variant="outlined" startIcon={<QueuePlayNextIcon />} sx={{ left: "80%" }} onClick={handleClickOpen}>
                Add file
            </Button>
          

        </>

    )
}
