import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { useNavigate } from 'react-router-dom';
import { SecurityUpdateWarningSharp } from '@mui/icons-material';
import { useState } from 'react';

export default function WarningsList(props) {
    const navigate = useNavigate();
    const [warnings,setWarnings]=useState(props.warnings);
    return (<>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>



            {warnings.map((w, ind) => <>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar> 
                   
                    </ListItemAvatar>
                    <ListItemText primary={w.text} secondary={w.date} />
                </ListItem></>)}


            <ListItem >
                <ListItemAvatar onClick={() => navigate(`/Warning`)}>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="לאזהרות מלאות" secondary="כולל ישנות..." />
            </ListItem>

    </List>
    </>);
}