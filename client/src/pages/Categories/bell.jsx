import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useEffect } from 'react';
// import { warning } from '@remix-run/router/dist/history';
import WarningsList from './newWarning';
import { Button } from 'bootstrap';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function WarningsDetails() {
  const [newWarnings, setNewWarnings] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const token = sessionStorage.getItem("token");

  const getNumberOfWarnings = async () => {
    console.log("try");
    const response = await fetch(`http://localhost:3600/api/warning`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },

    })
    if (response.ok) {
      const data = await response.json();
      console.log("data");
      console.log(data);
      let warning = data;
      warning = warning.filter(w => !w.is_read)
      setNewWarnings(warning)
      

    }
    else {

      const err = await response.json();
      console.log(err.massege);
    }
  };
  useEffect(() => {
    getNumberOfWarnings();
  }, []) 

  return (
   <>
    <IconButton aria-label="cart" >
      <StyledBadge badgeContent={newWarnings.length} color="secondary"onClick={()=>{setOpen(!open)}} >
        <NotificationsIcon />
      </StyledBadge>
    </IconButton>  
{open &&<WarningsList warnings={newWarnings}></WarningsList>}
    </>
  );
}