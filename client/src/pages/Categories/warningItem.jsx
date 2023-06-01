import { useState } from 'react';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

export default function WarningItem({ warning1 }) {
    const token = sessionStorage.getItem("token");
    const [warning, setWarning] = useState( warning1 );
    const [clean, setClean] = useState(true);
    const [color, setColor] = useState(false);

        const setIread = async () => {
            console.log(warning1.id);
            const response = await fetch(`http://localhost:3600/api/warning/${warning.id}`, {
                
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({is_read:1})
    
            })
            if (response.ok) {
                console.log("okupdateWarning" + warning.id);
                setColor(true)
    
            }
            else {
    
                const err = await response.json();
                console.log(err.message);
    
            }
        }
      
    const deleteWar = async () => {
        const response = await fetch(`http://localhost:3600/api/warning/${warning.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },

        })
        if (response.ok) {
            console.log("okdeleteWarning" + warning.id);
            setClean(false)

        }
        else {

            const err = await response.json();
            console.log(err.message);

        }
    }
    return (clean&&
        <>
            <ListItem sx={color&&{ backgroundColor:'greenyellow'}}>
                <ListItemAvatar>
                    <Avatar >
                        <IconButton >
                            <BackspaceIcon onClick={deleteWar} />
                        </IconButton></Avatar>

                </ListItemAvatar>
                <ListItemAvatar>
                    <Avatar>
                        <IconButton>
                            <BeenhereIcon onClick={setIread} />
                        </IconButton></Avatar>

                </ListItemAvatar>
                <ListItemText primary={warning.text} secondary={warning.date} />
            </ListItem></>)
};