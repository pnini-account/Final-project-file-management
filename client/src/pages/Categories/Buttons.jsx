import { PropaneSharp } from '@mui/icons-material';
import Button from '@mui/material/Button';
import AddCategory from "./List/AddCategory"
import AddFile from '../Files/AddFile';
export default function Actions({addOne}) {
  return (
    <>
<AddCategory addOne={addOne}></AddCategory>

    </>
)};