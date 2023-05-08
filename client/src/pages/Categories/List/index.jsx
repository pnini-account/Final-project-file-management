// ; תקח את כל התיקיו

import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Item from "./Item";
import { Grid } from "@mui/material";
import AddCategory from './AddCategory';
import { PropaneSharp } from "@mui/icons-material";

// ; תקח אתץ כל הקבצים לפ]י תיקיות

// ; return 
// ; folders.map(folder=><SingleFolder folder={folder})

const Categories = () => {
    const navigate = useNavigate();
    const [unauthorized, setUnauthorized] = useState(false);
    const [listOfCategory, setListOfCategory] = useState([]);
    //const [flag, setFlag] = useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);
    useEffect(() => {
        console.log("Im in useEffect");
        const token = sessionStorage.getItem("token");

        async function fetchData(props) {
            console.log("token",{token});
            const response = await fetch("http://localhost:3600/api/category", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })

            // console.log("response");
            // console.log(response);
            if (response.ok) {
                const data = await response.json();

                console.log({data});
                setListOfCategory(data)  ;              console.log({listOfCategory});

            //    props.fetchData(listOfCategory)
            }
            else {
                console.log("Im in error");
                setUnauthorized(true);
                const err = await response.json();
                setErr(err.message);
                console.log(err.message)
            }
        }
        fetchData();
    }, [])
    console.log("listOfCategory");
    console.log(listOfCategory);
    {/* <Item folder={i}></Item> */ }
    return (
       <Grid container spacing={1}>
        {listOfCategory.map((i,ind) => <Grid item xs={4}><Item key={ind} category={i}/></Grid>)}

        </Grid>
    );
}

export default Categories;
