import * as React from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Boxsx from "./file";
import TransitionAlerts from "./alert";
import { useParams } from 'react-router-dom';
import EmailDetails from "./emailFile";
const token = sessionStorage.getItem("token");
console.log(token);
export default function GroupOrientation(props){
  const navigate = useNavigate();
  const [unauthorized, setUnauthorized] = useState(false);
  const [sendEmailDetails, setSendEmailDetails] = useState(false);
  const [actionOK, setActionOK] = useState(false);
  const [err, setErr] = useState();
  const [ok, setOk] = useState(false);

const {id} = useParams();
  const useEffec = (() => {
    if (err == "") {
      setOk(true);
    }
  }, [err])

  const addWarning = async () => {
    console.log("addWarning")
    console.log(id)
    const response = await fetch(`http://localhost:3600/api/warning/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`Bearer ${token}`
      },
      body: JSON.stringify({text:"aaa",snooze:true,date:'01/22/22',is_read:false})
    })
    if (response.ok) {
      console.log("okaddWarning");
      setActionOK(true);
    }
    else {
      setUnauthorized(true);
      const err = await response.json();
      setErr(err.message);
    }
  };
  
  const sendEmail = async () => {
    console.log("sendEmail");
    setSendEmailDetails(true);
    const response = await fetch(`http://localhost:3600/api/email/file/${id}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`Bearer ${token}`
      },
      body: JSON.stringify({user_id:1,name:"aaa",url:"./gg/"})
    })
    if (response.ok) {
      console.log("oksendEmail");
      setActionOK(true);
    }
    else {
      setUnauthorized(true);
      const err = await response.json();
      setErr(err.message);
    }
  };
  
  
  const deleteFile = async () => {
    const response = await fetch(`http://localhost:3600/api/file/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`Bearer ${token}`
      },
      body: JSON.stringify()
    })
    if (response.ok) {
      console.log("okdeleteFile");
      setActionOK(true);
    }
    else {
      setUnauthorized(true);
      const err = await response.json();
      setErr(err.message);
    }
  };
  
  const renameFile = async () => {
    const response = await fetch(`http://localhost:3600/api/file/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization':`Bearer ${token}`
      },
      body: JSON.stringify({name:"rename", url:"", folderId:1, userId:1})
    })
    if (response.ok) {
      console.log("okrenameFile");
      setActionOK(true);
    }
    else {
      setUnauthorized(true);
      const err = await response.json();
      setErr(err.message);
    }
  };
  
  const replaceFile = async () => {
  
  };
  
  const buttons = [
    <Button key="1">שיתוף</Button>,
    <Button key="2" onClick={() => sendEmail()}>שליחה למייל</Button>,
    <Button key="3" onClick={() => addWarning()}>הוספת אזהרה</Button>,
    <Button key="4" onClick={() => deleteFile()}>מחיקה</Button>,
    <Button key="5" onClick={() => renameFile()}>שינוי שם</Button>,
    <Button key="6" onClick={() => replaceFile()}>שינוי מקום</Button>,
  ];
  
  return (<>
  {sendEmailDetails?<EmailDetails></EmailDetails>:<></>}
  {actionOK?<TransitionAlerts></TransitionAlerts>:<></>}
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 10,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
      <Boxsx></Boxsx>
    </Box>
    {/* <TransitionAlerts></TransitionAlerts> */}
  </>
  );
}
