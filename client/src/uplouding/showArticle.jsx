import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import BoxSx from "../pages/Files/file/file";
import { style } from "@mui/system";
// import DocViewer from "react-doc-viewer";


const ShowArticle = (name) => {
    const navigate = useNavigate()
    const location = useLocation();
    console.log(name)
    const content = name;
    console.log("content");
    console.log(content.name);
    
const a = `http://localhost:3600/files/${content.name}`;


    return (
        <>
        
        {/* sx={{width:"450px",hight:"450px" }} */}
            <iframe src={`http://localhost:3600/files/${content.name}` } width={"500px"} height={"500px"} allowfullscreen> 
             </iframe>
             {/* <iframe src={`https://docs.google.com/gview?url=http://localhost:3600/files/${content.name}.doc&embedded=true`}></iframe> */}
            
        </>
    )
}
export default ShowArticle;