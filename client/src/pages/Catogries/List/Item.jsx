/* <div onClick >{folder.name}</div> */
import Single from "../Single"
// import axios from "axios";
//import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

export default function Item  (props){
   const [getInto, setGetInto] = useState(false);
   const navigate = useNavigate();

    useEffect(() => {    
       {getInto && navigate(`/SingleCategory/${props.category.id}`)}
    }, [getInto])
    return (    
 <>  
        <Card sx={{ maxWidth: 345 }} onClick={()=>{setGetInto(true)}}>
          <CardMedia
            sx={{ height: 140 }}
            image={props.category.img}
            
            title="green iguana"
          />
          <FolderOpenIcon >   
          </FolderOpenIcon>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.category.text}
            </Typography>
       
            <Typography variant="body2" color="text.secondary">
            noa hashmena
            </Typography>
          </CardContent>
          <CardActions>
         
          </CardActions>
        </Card>    <br/>
           <br/><br/><br/>
        
   </>)
}

