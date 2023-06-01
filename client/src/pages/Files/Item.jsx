/* <div onClick >{folder.name}</div> */
// import Single from "."
// import axios from "axios";
//import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Face4Icon from '@mui/icons-material/Face4';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteFile from './file/delete';
import { useParams } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import UpdateFile from './file/update';
export default function FileItem({file}) {
  // console.log(onDelete)
  const [name, setName] = useState(file.name);

  // const navigate = useNavigate();
  // const {id}=useParams();
  const [clean, setClean] = useState(true);

const cleanF=()=>{
  setClean(false);
  
}
const rename=(name)=>{
  setName(name)
}

  return (
    <>
      {/* {getInto && setGetInto(false) && navigate(`/SingleFile/${file.id}`)} */}
      {/* <Card sx={{ maxWidth: 345 }} onClick={() => { setGetInto(true); }}> */}
     {clean&& <Card> 
        <CardActionArea>
        <CardMedia
             sx={{ maxWidth: 345 }} 
            image="/static/images/cards/contemplative-reptile.jpg"
            
            title="green iguana"
          />
        {console.log(file.name)}
        <Face4Icon >
        </Face4Icon>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            nomi
          </Typography>
        </CardContent>
       <DeleteFile idFile={file.id} onDelete={cleanF}></DeleteFile>
       <UpdateFile file={file} setFileName={rename}></UpdateFile>
       </CardActionArea>
        </Card>  }
      {/*  */}

    </>)
}

