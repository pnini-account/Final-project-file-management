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
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DeleteFolder from './DeleteFolder';
// import SingleCategory from '../Catogries/Single';
import SingleFolder from '../Folders/Single'
import { CardActionArea } from '@mui/material';

export default function FolderItem(props) {
  const [getInto, setGetInto] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   // { getInto && navigate(`/SingleFolder/${props.folder.id}`) }
  //   { props.setGetIntoFolder != null && props.setGetIntoFolder(true) }
  //   // setGetIntoFolder && setGetIntoFolder(true)
  //   // setGetInto(false)
  //   console.log(getInto, "getIntogetInto");
  // }, [getInto])

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
              noa hashmena
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <DeleteFolder></DeleteFolder>
        </CardActions>
      </Card>    <br />
      <br /><br /><br />

    </>)
}

