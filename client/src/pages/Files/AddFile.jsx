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

export default function AddFile({onAdd}) {
   
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [err, setErr] = useState(false);
    const [ok, setOk] = useState(false);
    const [unauthorized, setUnauthorized] = useState(false);
    const [file, setFile] = useState();

    useEffect(() => {
        console.log("add"+file)
        onAdd(file) 
    }, [file])

    const addFileToDB = async (text) => {
        const token = sessionStorage.getItem("token");
        const responseOfFile = await fetch(`http://localhost:3600/api/file`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            },
            body: JSON.stringify({folderId:id,name: text})
        })       

    
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
    


   
    
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log("add"+file)
        onAdd(file) 
        setOpen(false);
    };

    return (

        <>
            <Button variant="outlined" startIcon={<QueuePlayNextIcon />} sx={{ left: "80%" }} onClick={() => {handleClickOpen()}}>
                Add file
            </Button>
            <Dialog open={open} onClose={() => {handleClose()}}>

                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name of file"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClose(); addFileToDB(name) }}>Save</Button>
                </DialogActions>
            </Dialog>

        </>)
}
// const handleClickOpen = () => {
//     console.log(id)
//     navigate(`/UplaudFile${id}`)
// };