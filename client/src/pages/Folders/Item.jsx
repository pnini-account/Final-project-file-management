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
// import SingleCategory from '../Catogries/Single';
import { CardActionArea } from '@mui/material';

export default function FolderItem(props) {
  const token = sessionStorage.getItem("token");
  const id = props.folder.id;
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
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
getCount()}, [])



  return (
    <>
      {/* {getInto &&console.log(getInto)&&navigate(`/SingleFolder/${props.folder.id}`)} */}
      <Card sx={{ maxWidth: 345 }} >
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
              {props.folder.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {count}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <DeleteFolder id={props.folder.id}></DeleteFolder>
        </CardActions>
      </Card>    <br />
      <br /><br /><br />

    </>)
}

