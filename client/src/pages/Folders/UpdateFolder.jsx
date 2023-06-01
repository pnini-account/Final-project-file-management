import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';

export default function UpdateFolder({ setFolderName, folder }) {


      const token = sessionStorage.getItem("token");
      const updateFolder = async (name) => {
        console.log("try");
        const response = await fetch(`http://localhost:3600/api/folder/${folder.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ name:name })
        })
        if (response.ok) {
          console.log("okUpdateFolder");
        
         setFolderName(name)

        }
        else {

          const err = await response.json();
          console.log(err.massege);
        }
      };

    const [open, setOpen] = React.useState(false);
      const [name, setName] = useState(folder.name);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" startIcon={<QueuePlayNextIcon />}
              onClick={(event) => {
                event.stopPropagation()
                handleClickOpen()
              }}
            >
                Update folder
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="rename category "
                        type="text"
                        fullWidth
                        variant="standard"

                        onChange={(e) => { e.stopPropagation();setName(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClose(); updateFolder(name) ;}}>Save</Button>
                </DialogActions>
            </Dialog>

            <></>
        </div>
    );
}
// 