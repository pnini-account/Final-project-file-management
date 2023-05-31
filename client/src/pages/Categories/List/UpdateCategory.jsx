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
import Category from '@mui/icons-material/Category';

export default function UpdateCategory({ id, setCategory,category }) {


  const token = sessionStorage.getItem("token");
  const updateCategory = async (text, color, img) => {
    console.log("try");
    const response = await fetch(`http://localhost:3600/api/category/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ text: text, color: color, img: img })
    })
    if (response.ok) {
      console.log("okUpdateCategory");
      console.log(response);
      const category1 = { "id": id, "text": text, "color": color, "img": img }
      setCategory(category1)

    }
    else {

      const err = await response.json();
      console.log(err.massege);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState(category.name);
  const [color, setColor] = useState(category.color);
  const [img, setImg] = useState(category.img);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" startIcon={<QueuePlayNextIcon />} onClick={(event) => {
        event.stopPropagation()
        handleClickOpen()
      }}>
        Update Category
      </Button>
      <Dialog open={open} onClose={handleClose}>

        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name of category"
            type="text"
            fullWidth
            variant="standard"

            onChange={(e) => { e.stopPropagation(); setText(e.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Color"
            label="color of category"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => { e.stopPropagation(); setColor(e.target.value) }}

          />    <TextField
            autoFocus
            margin="dense"
            id="Img"
            label="image to show on categry"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => { e.stopPropagation(); setImg(e.target.value) }}

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { handleClose(); updateCategory(text, color, img) }}>Save</Button>
        </DialogActions>
      </Dialog>

      <></>
    </div>
  );
}
