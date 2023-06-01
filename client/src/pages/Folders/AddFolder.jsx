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
export default function AddFoler({onAdd,fatherType}) {
   
    const navigate = useNavigate();
    const { id } = useParams();
    const [folder, setFolder] = useState();
    useEffect(() => {
        onAdd(folder) 
    }, [folder])

    const addFolderToDB = async (text) => {
        const token = sessionStorage.getItem("token");
        let responseOfFolder; 
        if(fatherType=='f'){
        responseOfFolder = await fetch(`http://localhost:3600/api/folder`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            },
            body: JSON.stringify({ parentId_category: null, parentId_folder: id, name: text })
        }) }
        else
        {    
         responseOfFolder = await fetch(`http://localhost:3600/api/folder`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            },
            body: JSON.stringify({ parentId_category: id, parentId_folder: null, name: text })
        })  }      
 

      
            if (responseOfFolder.ok) {
                setFolder(await responseOfFolder.json())
            }
            else {
                
                const err = await responseOfFolder.json();
               
                console.log(err.message)
            }
        
    }

    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <>
            <Button variant="outlined" startIcon={<QueuePlayNextIcon />} sx={{ left: "80%" }} onClick={handleClickOpen}>
                Add Folder
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name of folder"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClose(); addFolderToDB(name) }}>Save</Button>
                </DialogActions>
            </Dialog>

        </>

    )
}
