// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Input } from '@mui/material';

import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function File() {
  return (
    <div className="card">
      <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
    </div>
  )
}

// export default function File() {
//   return (
//     <Card>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         גרור לכאן את הקובץ
//         </Typography>
//       </CardContent>
//       <Input  type="file"></Input>
//     </Card>
//   );
// }