import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CategoryIcon from '@mui/icons-material/Category';
import { useNavigate } from 'react-router-dom';

export default function CategoryList({category}) {
    const navigate=useNavigate();
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem onClick={() =>  navigate(`/SingleCategory/${category.id}`)}>
        <ListItemAvatar >
          <Avatar>
            <CategoryIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={category.text} secondary="Jan 9, 2014" />
      </ListItem>
    
    </List>
  );
}