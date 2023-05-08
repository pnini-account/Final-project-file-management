import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const token = sessionStorage.getItem("token");

export default function UpdateFile(props) {

  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const [folderId, setFolderId] = useState();
  const [userId, setUserId] = useState();
  const [err, setErr] = useState();
  const [ok, setOk] = useState(false);
  const [unauthorized, setUnauthorized] = useState(false);
  const [actionOK, setActionOK] = useState(false);

  const { id } = useParams();
  const useEffec = (() => {
    if (err == "") {
      setOk(true);
    }
  }, [err])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose1 = () => {
    setOpen(false);
    updateFile();
  };

  const updateFile = async () => {
    const response = await fetch(`http://localhost:3600/api/file/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`Bearer ${token}`
      },
      body: JSON.stringify({name:name, url:url, folderId:folderId, userId:userId})
    })
    if (response.ok) {
      console.log("okrenameFile");
      setActionOK(true);
    }
    else {
      setUnauthorized(true);
      const err = await response.json();
      setErr(err.message);
    }
  };

  return (
<>    <Button variant="outlined" onClick={handleClickOpen}>
       update file
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>file details</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="url"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setUrl(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="folderId"
            label="folderId"
            type="int"
            fullWidth
            variant="standard"
            onChange={(e) => setFolderId(e.target.value)}
          />
             <TextField
            autoFocus
            margin="dense"
            id="userId"
            label="userId"
            type="int"
            fullWidth
            variant="standard"
            onChange={(e) => setUserId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose1}>update</Button>
        </DialogActions>
      </Dialog>
      </>  
  );
}