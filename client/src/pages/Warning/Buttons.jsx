import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import DeleteWarning from './deleteWarning';
import EmailWarning from './emailWarning';


export default function Actions(props) {
    const navigate = useNavigate();
    console.log("props.id"+props.id)
    const fileId = props.fileId;
    console.log("fileId"+fileId);
    return (
        <>
            <Button variant="outlined" disableElevation onClick={()=>{navigate(`/ReadFile/${fileId}`)}}>לפתיחת המסמך</Button>
            <DeleteWarning id={props.id}></DeleteWarning>
            <Button variant="outlined" disableElevation onClick={()=>{navigate(`/ReadFile/${fileId}`)}}>הפעלת נודניק</Button>
            <EmailWarning id={props.id} fileId={fileId} text = {props.text}></EmailWarning>
        </>)
}