import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


export default function Breadcrumb({ type }) {
  // function handleClick(event) {
  //   event.preventDefault();
  //   console.info('You clicked a breadcrumb.');
  // }
  const token = sessionStorage.getItem("token")

  const { id } = useParams()

  // useEffect(() => {
  //   console.log({ id });
  //   console.log("brachi");
  //   async function fetchData() {
  //     const response = await fetch(`http://localhost:3600/api/breadcrumb/${id}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'authorization': `Bearer ${token}`
  //       },
  //       body: JSON.stringify({ type: type })
  //     })

  //     if (response.ok) {
  //       console.log("good");
  //       const data = await response.json();

  //     }


  //     else {
  //       console.log("err");
  //       const err = await response.json();
  //       console.log(err.message)
  //     }
  //   } fetchData();
  // }, [])




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
    <h1>ffffffffff</h1>
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