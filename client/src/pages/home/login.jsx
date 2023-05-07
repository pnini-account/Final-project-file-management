import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function LogIn() {
    const navigate = useNavigate();

    return (

        <Button variant="contained" onClick={() => (navigate('/login'))} disableElevation>
            login
        </Button>
    );
}
