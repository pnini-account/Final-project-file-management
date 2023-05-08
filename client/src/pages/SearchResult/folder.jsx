import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';

import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
export default function FolderList({folder}) {
    const navigate = useNavigate();

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem onClick={() =>  navigate(`/SingleFolder/${folder.id}`)}>
        <ListItemAvatar >
          <Avatar >
            <FolderSpecialIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={folder.name} secondary="Jan 9, 2014" />
      </ListItem>
    
    </List>
  );
}