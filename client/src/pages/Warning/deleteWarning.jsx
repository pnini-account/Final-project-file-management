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
import AddWarning from '../Files/file/warning';

const token = sessionStorage.getItem("token");

export default function DeleteWarning(id) {
  const [open, setOpen] = React.useState(false);
  const [err, setErr] = useState();
  const [ok, setOk] = useState(false);
  const [unauthorized, setUnauthorized] = useState(false);
  const [actionOK, setActionOK] = useState(false);
  
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
    deleteWarning();
  };

  const deleteWarning = async () => {
    console.log(id.id)
    const Id = id.id;
    const response = await fetch(`http://localhost:3600/api/warning`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body:  JSON.stringify({id:Id})
    })
    if (response.ok) {
      console.log("okdeleteWarning");
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
        delete warning
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Once deleted you will not be able to recover the warning.
          Are you sure you want to delete the warning?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose1}>delete</Button>
        </DialogActions>
      </Dialog>
      </>  
  );
}