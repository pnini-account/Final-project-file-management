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

export default function EmailWarning() {
  console.log("EmailDetails")
  const [open, setOpen] = React.useState(false);
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
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
    sendEmail();
  };

  const sendEmail = async () => {
    console.log("sendEmail");
    const response = await fetch(`http://localhost:3600/api/email/file/${id}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ message: message,subject:subject})
    })
    if (response.ok) {
      console.log("oksendEmail");
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
        send to email
      </Button>
      {console.log("ddd")}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Email Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="massege"
            label="Massege"
            type="string"
            fullWidth
            variant="standard"
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose1}>Send Email</Button>
        </DialogActions>
      </Dialog>
      </>  
  );
}