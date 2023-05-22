
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";
import WarningItem from "./war";

const token = sessionStorage.getItem("token");

const Warnings = () => {
    const navigate = useNavigate();
    const [unauthorized, setUnauthorized] = useState(false);
    const [listOfWarnings, setListOfWarnings] = useState([]);
    //const [flag, setFlag] = useState(false);   
    const [open, setOpen] = React.useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    useEffect(() => {
        async function fetchData() {
            console.log("www1");
            const response = await fetch("http://localhost:3600/api/warning", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            console.log("response");
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                console.log("data");
                console.log(data);
                setListOfWarnings(data)
            }
            else {
                setUnauthorized(true);
                const err = await response.json();
                setErr(err.message);
                console.log(err.message)
                console.log("err.message")
            }
        }
        console.log("www2");
        fetchData();
    }, [])
    console.log("listOfWarnings");
    console.log(listOfWarnings);
    return (
        <>  
        {/* <Button variant="outlined" onClick={handleClickOpen}>
        get all warnings
        </Button> */}
        {listOfWarnings.map((i,ind) => <WarningItem key={ind} warning={i}></WarningItem>)}
        </>
    );
}

export default Warnings;
