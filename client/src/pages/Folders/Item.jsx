/* <div onClick >{folder.name}</div> */
// import Single from "."
// import axios from "axios";
//import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DeleteFolder from './DeleteFolder';
import UpdateFolder from './UpdateFolder';
// import SingleCategory from '../Catogries/Single';
import { CardActionArea } from '@mui/material';

export default function FolderItem(props) {
  const token = sessionStorage.getItem("token");
  const [id, setId] = useState(props.folder.id);
  const [count, setCount] = useState(0);
  const [clean, setClean] = useState(true);
const [name,setName] = useState(props.folder.name)
  const navigate = useNavigate();
  console.log("k");
  useEffect(()=>{
    const getCount = async () => {
    console.log("im in 1 ");
    const response = await fetch(`http://localhost:3600/api/folder/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`

      }
    })

    if (response.ok) {
      console.log("im in 2 ");
      const data = await response.json();
      setCount(data.count)
    }

    else {
      console.log("im in 3 ");
      const err = await response.json();
      console.log(err.message)
    }
  }
getCount()}, [id])

const cleanF=()=>{
setClean(false)
}

useEffect(()=>{setName(props.folder.name)},[props.folder.name]);
useEffect(()=>{setId(props.folder.id)},[props.folder.id]);
useEffect(()=>{setCount(props.folder.count)},[props.folder.count]);

const rename=(name)=>{
setName(name)
}
  return (
   
    <>
    {clean&& <Card sx={{ maxWidth: 345 }}>
 
        <CardActionArea onClick={() => navigate(`/SingleFolder/${props.folder.id}`)}>
          {/* <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            
            title="green iguana"
          /> */}
          {/* {console.log(props.folder.name)} */}
          <FolderOpenIcon >
          </FolderOpenIcon>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {count}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <DeleteFolder id={props.folder.id} onDelete={cleanF}/>
          <UpdateFolder folder={props.folder} setFolderName={rename}></UpdateFolder>
        </CardActions>
      </Card>    }
     

    </>)
}

