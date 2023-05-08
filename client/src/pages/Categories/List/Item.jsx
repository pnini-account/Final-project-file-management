/* <div onClick >{folder.name}</div> */
import Single from "../Single"
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
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";
import { CardActionArea } from "@mui/material";
export default function Item(props) {
   const [getInto, setGetInto] = useState(false);
   const [unauthorized, setUnauthorized] = useState(false);
   const [sendEmailDetails, setSendEmailDetails] = useState(false);
   const [actionOK, setActionOK] = useState(false);
   const [err, setErr] = useState();
   const [ok, setOk] = useState(false);
   const token = sessionStorage.getItem("token");

   const navigate = useNavigate();

   useEffect(() => {
      { getInto && navigate(`/SingleCategory/${props.category.id}`) }
   }, [getInto])



   return (
      <> 
         <Card sx={{ maxWidth: 345 }} >
            <CardActionArea onClick={() => { setGetInto(true) }}>
            <CardMedia
               sx={{ height: 140 }}
               image={props.category.img}

               title="green iguana"
            />
            <FolderOpenIcon >
            </FolderOpenIcon>

           
               <Typography gutterBottom variant="h5" component="div">
                  {props.category.text}
               </Typography>

               <Typography variant="body2" color="text.secondary">
                  {props.category.color}
               </Typography>
            </CardActionArea>
            <CardActions>
               <UpdateCategory></UpdateCategory>
               <DeleteCategory id={props.category.id}></DeleteCategory>
            </CardActions>



         </Card>    <br />
         <br /><br /><br />

      </>)
}

