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
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";
import { CardActionArea } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';

export default function Item  (props){
   const [getInto, setGetInto] = useState(false);
   const [sendEmailDetails, setSendEmailDetails] = useState(false);
   const [clean, setClean] = useState(true);
   const [category, setCategory] = useState(props.category);
   const[count,setCount]=useState(0)

   const token = sessionStorage.getItem("token");

   const navigate = useNavigate();
const cleanF=()=>{
setClean(false)

}
    useEffect(() => {    
       {getInto && navigate(`/SingleCategory/${category.id}`)}
    }, [getInto])

    useEffect(()=>{
      const getCount = async () => {
      const response = await fetch(`http://localhost:3600/api/count/${category.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
  
        }
      })
  
  
      if (response.ok) {
        console.log("im in cat "); 
        const data = await response.json();
        setCount(data)
      }
  
      else {
        console.log("im in 3 ");
  
        const err = await response.json();
  
        console.log(err.message)
      }
    }
  getCount()}, [])
  


 
return(
 <>  {clean&&
        <Card sx={{ maxWidth: 345 }} >
         <CardActionArea onClick={()=>{setGetInto(true)}}>
          <CardMedia
            sx={{ height: 140 }}
            image={category.img}
            
            title="green iguana"
          />
          <CategoryIcon/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {category.text}
            </Typography>
       
            <Typography variant="body2" color="text.secondary">
            {count}
            </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <UpdateCategory id={category.id} setCategory={setCategory} category={category}></UpdateCategory>
            <DeleteCategory id={category.id} onDelete={cleanF}></DeleteCategory>
            </CardActions>

            
      
        </Card> }   <br/>
           <br/><br/><br/>
        
   </>)
}

