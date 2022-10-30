import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

import useStyles from './styles';
import caologo from '../../images/caologo.jpg';

const Navbar = () => {
    const classes = useStyles();
    const user=null;
    
    return(
        <AppBar position="static" color="inherit" className={classes.appBar}> {/*appbar is the one on top that desnt move even when ure scrolling*/}
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.typography} varaint="hs" align="center">DLSU CAO Ticketing Site</Typography>
                <img className={classes.image} src={caologo} alt="memories" height="60"/> {/*className is like defining a class in HTML*/}
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
                ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
            
        </AppBar>
    );
}
    


export default Navbar;