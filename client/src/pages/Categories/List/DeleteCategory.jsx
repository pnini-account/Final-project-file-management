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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const token = sessionStorage.getItem("token");

export default function DeleteCategory(props) {
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
    console.log(props.id)
    debugger;
     deleteCategory(props.id)
  };


    

    const deleteCategory = async (id) => {
        const response = await fetch(`http://localhost:3600/api/category/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'authorization':`Bearer ${token}`
          },
          body: JSON.stringify()
        })
        if (response.ok) {
          console.log("okdeleteCategory"+id);
          setActionOK(true);
        }
        else {
          setUnauthorized(true);
          const err = await response.json();
          setErr(err.message);
          
        }
      };
        
  return (
<>    <Button variant="outlined" startIcon={<DeleteForeverIcon />} onClick={(event)=>{
     event.stopPropagation();
    handleClickOpen();
       } 
          }>
            delete Category
        </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
         האם אתה בטוח שברצונך למחוק קובץ זה לצמיתות?
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