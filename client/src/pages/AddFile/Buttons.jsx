import Button from '@mui/material/Button';
import AddWarning from "../Files/file/warning";
export default function Actions() {
  return (
    <>
    <Button variant="contained" disableElevation>
      שינוי שם קובץ
    </Button>
    <Button variant="contained" disableElevation>
    שינוי נתיב קובץ 
  </Button>
  <AddWarning></AddWarning>
    </>
)};