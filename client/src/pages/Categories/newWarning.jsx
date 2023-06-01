import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WarningItem from './warningItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

export default function WarningsList(props) {
    const navigate = useNavigate();
    const [warnings, setWarnings] = useState(props.warnings);
  
    const delete1=()=>{

    }
    return (<>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

{console.log({props})}
{console.log({warnings})}

            {warnings.map((w, ind) =><WarningItem key={ind} warning1={w} />)}
       

            <ListItem >
                <ListItemAvatar  onClick={() => navigate(`/Warning`)}>
                    <Avatar sx={{ backgroundColor:'greenyellow'}}>
                        <CallMissedOutgoingIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="לאזהרות מלאות" secondary="כולל ישנות..." />
            </ListItem>

        </List>
    </>);
}