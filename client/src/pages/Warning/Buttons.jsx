import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import DeleteWarning from './deleteWarning';
import EmailWarning from './emailWarning';


export default function Actions(id) {
    const navigate = useNavigate();
    console.log("?????"+id.id)
    const Id = id.id;
    return (
        <>
            <Button variant="outlined" disableElevation onClick={()=>{navigate(`/ReadFile/${Id}`)}}>לפתיחת המסמך</Button>
            <DeleteWarning id={id}></DeleteWarning>
            <Button variant="outlined" disableElevation>הפעלת נודניק</Button>
            <EmailWarning w_id={id}></EmailWarning>
        </>)
}