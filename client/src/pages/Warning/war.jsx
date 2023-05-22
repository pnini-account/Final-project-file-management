import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Actions from './Buttons';
import { color } from '@mui/system';
import { orange, red } from '@mui/material/colors';

export default function WarningItem(props) {
  // const w = warning.get({plain:true});
  // console.log(w)
  console.log("props ???"+props?.warning?.id)
  return (
    <Stack sx={{ width: '100%'}} spacing={2}>``
      <Alert severity="info" sx={{ backgroundColor:'greenyellow'}}>
        <AlertTitle>Info</AlertTitle>
        {console.log(props.warning.file_id)}
        {/* {console.log(props.warning.file_id)} */}
        {props?.warning?.text}
        — <strong>{props?.warning?.date}</strong>
        <Actions id={props?.warning?.id} fileId={props?.warning?.file_id} text={props?.warning?.text}></Actions>
      </Alert>
      <br></br>
    </Stack>
  );
}