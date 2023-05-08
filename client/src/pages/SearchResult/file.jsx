import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
export default function FileList({file}) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <InsertDriveFileIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={file.name} secondary="Jan 9, 2014" />
      </ListItem>
    
    </List>
  );
}