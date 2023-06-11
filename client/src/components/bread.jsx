import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { SettingsRemoteOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function Breadcrumb({ type,id }) {
  // function handleClick(event) {
  //   event.preventDefault();
  //   console.info('You clicked a breadcrumb.');
  // }
  const token = sessionStorage.getItem("token")
const[url,setUrl]=useState([]);

  useEffect(() => {
    console.log({ id });
    console.log("brachi");
    async function fetchData() {
      const response = await fetch(`http://localhost:3600/api/breadcrumb/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ type: type })
      })

      if (response.ok) {
        
        const data = await response.json();
        setUrl(data)
console.log({data});
      }


      else {
        console.log("err");
        const err = await response.json();
        console.log(err.message)
      }
    } fetchData();
  }, [id])




  //   if(breadcrumcs.length!==0){
  //   console.log({breadcrumcs});
  //   const breadcrumbs = [
  //     <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
  // d  </Link>,
  //     <Link
  //       underline="hover"
  //       key="2"
  //       color="inherit"
  //       href="/material-ui/getting-started/installation/"
  {/* <Link to="/f"> */ }

  //       onClick={handleClick}
  //     >
  // d
  //     </Link>,
  //     <Typography key="3" color="text.primary">
  //       Breadcrumb
  //     </Typography>,
  //   ];}


  return (
    <>

    <Grid container spacing={1}>
    {url.map((i) =>{
      if(i.type===2)
      
        return  <Typography key="4" color="text.primary"> <Link underline="hover" key="1" color="inherit" to={`/SingleFolder/${i.id}`}><DirectionsRunIcon/>{i.name+" > "}</Link></Typography>
    else 
    return <Typography key="3" color="text.primary"><Link underline="hover" key="1" color="inherit" to={`/SingleCategory/${i.id}`}><DirectionsRunIcon/>{i.name+" > "}</Link></Typography>
    })}

    </Grid></>
    // url.map((l)=>{
    //   if(l.type===2)
    //   {
    //     <Link component={RouterLink} to="/SingleFolder">

    //     </Link>
    //   }
    //   if(l.type===1)
    //   {
    //     // <Link component={RouterLink} to="/SingleCategory">

    //     // </Link>
    //     <h3>t</h3>
    //   }
    // })

    // <Stack spacing={2}>

    //   <Breadcrumbs
    //     separator={<NavigateNextIcon fontSize="small" />}
    //     aria-label="breadcrumb"
    //   >
    //     {/* {breadcrumbs} */}
    //   </Breadcrumbs>
    // </Stack>
  );
}