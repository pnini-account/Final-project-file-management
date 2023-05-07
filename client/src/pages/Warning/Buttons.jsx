import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteWarning from './deleteWarning';
import EmailWarning from './emailWarning';


export default function Actions(id) {

    return (
        <>
            <Button variant="outlined" disableElevation>לפתיחת המסמך</Button>
            <DeleteWarning id={id}></DeleteWarning>
            <Button variant="outlined" disableElevation>הפעלת נודניק</Button>
            <EmailWarning w_id={id}></EmailWarning>
        </>)
}