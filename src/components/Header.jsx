import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Portfolio
                </Typography>
                <Button component={Link} to="/" color="inherit">Home</Button>
                <Button component={Link} to="/projects" color="inherit">Projects</Button>
                <Button component={Link} to="/contact" color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;