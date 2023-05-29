// ; תקח את כל התיקיו

import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Item from "./Item";
import { Grid } from "@mui/material";
import AddCategory from './AddCategory';
import { PropaneSharp } from "@mui/icons-material";
import { render } from "@testing-library/react";


// ; תקח אתץ כל הקבצים לפ]י תיקיות

// ; return 
// ; folders.map(folder=><SingleFolder folder={folder})

const Categories = () => {
    const navigate = useNavigate();
    const [render, setRender] = useState(false);
    const [listOfCategory, setListOfCategory] = useState([]);
    //const [flag, setFlag] = useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);
    useEffect(()=>{
        console.log({listOfCategory});
    },[listOfCategory])
    useEffect(() => {
        console.log("Im in useEffect");
        const token = sessionStorage.getItem("token");

        async function fetchData() {
            console.log("token",{token});
            const response = await fetch("http://localhost:3600/api/category",
             {
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
                setListOfCategory([...data])

            //    props.fetchData(listOfCategory)
            }
            else {
                console.log("Im in error");
                const err = await response.json();
                console.log(err.message)
            }
        }
        fetchData();
    }, [render])
    const renderFunc=()=>{
        setRender(true)
    }
    const add=(category)=>{
        setListOfCategory([...listOfCategory,category])
    }
    console.log("listOfCategory");
    console.log(listOfCategory);
    {/* <Item folder={i}></Item> */ }
    return (<>
    <AddCategory addOne={add}/>
       <Grid container spacing={1}>
        {listOfCategory.map((i,ind) => <Grid item xs={4}><Item key={ind} category={i} render={renderFunc}/></Grid>)}

        </Grid></>
    );
}

export default Categories;
