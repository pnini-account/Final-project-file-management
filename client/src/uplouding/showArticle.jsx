import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import BoxSx from "../pages/Files/file/file";


const ShowArticle = (name) => {
    const navigate = useNavigate()
    const location = useLocation();
    console.log(name)
    const content = name;
    console.log("content");
    console.log(content.name);
    
console.log(`http://localhost:3600/files/${content.name}`)
    return (
        <>
            <iframe src={`http://localhost:3600/files/${content.name}`} sx={{width:"100%" ,height:"100%" }}>
            </iframe>
        </>
    )
}
export default ShowArticle;