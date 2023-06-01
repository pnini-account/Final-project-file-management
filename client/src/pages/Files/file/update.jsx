import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';

export default function UpdateFile({ setFileName, file }) {


      const token = sessionStorage.getItem("token");
      const updateFile = async (name) => {
        console.log("try");
        const response = await fetch(`http://localhost:3600/api/file/${file.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ name:name })
        })
        if (response.ok) {
          console.log("okUpdateFile");
         setFileName(name)

        }
        else {

          const err = await response.json();
          console.log(err.massege);
        }
      };

    const [open, setOpen] = React.useState(false);
      const [name, setName] = useState(file.name);

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
                Update file
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="rename file "
                        type="text"
                        fullWidth
                        variant="standard"

                        onChange={(e) => { e.stopPropagation();setName(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClose(); updateFile(name) ;}}>Save</Button>
                </DialogActions>
            </Dialog>

            <></>
        </div>
    );
}
// 