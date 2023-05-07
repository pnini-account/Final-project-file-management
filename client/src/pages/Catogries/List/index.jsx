// ; תקח את כל התיקיו

import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Item from "./Item";
import AddCategory from './AddCategory';

// ; תקח אתץ כל הקבצים לפ]י תיקיות

// ; return 
// ; folders.map(folder=><SingleFolder folder={folder})

const token = sessionStorage.getItem("token");
const Categories = () => {
    const navigate = useNavigate();
    const [unauthorized, setUnauthorized] = useState(false);
    const [listOfCategory, setListOfCategory] = useState([]);
    //const [flag, setFlag] = useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3600/api/category", {
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
                setListOfCategory(data)
            }
            else {
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
       <>
        {listOfCategory.map((i,ind) => <Item key={ind} category={i}></Item>)}
    </>
    );
}

export default Categories;
