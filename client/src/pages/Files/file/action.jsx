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
import AddWarning from './warning';
import DeleteFile from './delete';
import UpdateFile from './update';
const token = sessionStorage.getItem("token");
console.log(token);
export default function Actions(){
    const navigate = useNavigate();
    const [unauthorized, setUnauthorized] = useState(false);
    const [actionOK, setActionOK] = useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);
  
  const {id} = useParams();
    const useEffec = (() => {
      if (err == "") {
        setOk(true);
      }
    }, [err])


    return(<>
    <EmailDetails></EmailDetails>
    <AddWarning></AddWarning>
    <DeleteFile></DeleteFile>
    <UpdateFile></UpdateFile> 
    <Boxsx></Boxsx>
    </>)
}