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

export default function AddCategory({addOne}) {
    const navigate = useNavigate();

    const [err, setErr] = useState(false);
    const [ok, setOk] = useState(false);
    const [unauthorized, setUnauthorized] = useState(false);

    const addCategoryToDB = async (text, color, img) => {
        const token = sessionStorage.getItem("token");
        const responseOfCategory = await fetch(`http://localhost:3600/api/category`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`

            },
            body: JSON.stringify({ text: text, color: color, img: img })
        })

        if (responseOfCategory.ok) {
            addOne(await responseOfCategory.json())
        }
        else {
            setUnauthorized(true);
            const err = await responseOfCategory.json();
            setErr(err.message);
            console.log(err.message)
        }
    }

    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [img, setImg] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" startIcon={<QueuePlayNextIcon />} sx={{ left: "80%" }} onClick={handleClickOpen}>
                Add Category
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
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="color"></input>
                    <br></br>
                    <input type="file"  />

                  
                    {/* 
                        autoFocus
                        margin="dense"
                        id="Color"
                        label="color of category"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setColor(e.target.value)}

                    />   */}
                     {/* <TextField 
                        autoFocus
                        margin="dense"
                        id="Img"
                        label="image to show on categry"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setImg(e.target.value)}

                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClose(); addCategoryToDB(name, color, img) }}>Save</Button>
                </DialogActions>
            </Dialog>

            <></>
        </div>
    );
}