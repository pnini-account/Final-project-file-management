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

export default function AddWarning() {

  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState();
  const [snooze, setSnooze] = useState(true);
  const [date, setDate] = useState();
  const [is_read, setIs_read] = useState();
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
    addWarning();
  };

  const addWarning = async () => {
    console.log("addWarning")
    console.log(id)
    const response = await fetch(`http://localhost:3600/api/warning/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`Bearer ${token}`
      },
      body: JSON.stringify({text:text,snooze:true,date:date,is_read:is_read})
    })
    if (response.ok) {
      console.log("okaddWarning");
      console.log(typeof(snooze));
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
       add warning
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>my warning</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="text"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setText(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="snooze"
            label="snooze"
            type="bool"
            fullWidth
            variant="standard"
            onChange={(e) => setSnooze(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="date"
            label="date"
            type="date"
            fullWidth
            variant="standard"
            onChange={(e) => setDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose1}>add warning</Button>
        </DialogActions>
      </Dialog>
      </>  
  );
}