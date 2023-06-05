//file
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Actions from "./Add";
import ResponsiveAppBar from "../../components/Navbar";
import Breadcrumb from "../../components/bread";
//<Actions/>

const ReadFile = () => {
    const navigate = useNavigate();
    return (<>
    {/* <ResponsiveAppBar></ResponsiveAppBar> */}
    <h1>קריאת מסמך ועריכה</h1>
    <Breadcrumb type={3}></Breadcrumb>
        {/* {navigate('/ReadFile')} */}
        <Actions></Actions>
         </>)
}

export default ReadFile;
