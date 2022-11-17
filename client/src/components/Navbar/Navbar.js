import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

import useStyles from './styles';
import logo from '../../images/image.png';

const Navbar = () => {
    const classes = useStyles();
    const user=null;

    
    return(
        <AppBar position="static" color="inherit" className={classes.appBar} > {/*appbar is the one on top that desnt move even when ure scrolling*/}
                <div className={classes.brandContainer} >
                    <img className={classes.image} src={caologo} alt="memories" height="60"/> {/*className is like defining a class in HTML*/}
                    <Button component={Link} to="/" className={classes.typography} varaint="hs" align="center">DLSU CAO</Button>
                </div>
            
                <Toolbar className={classes.toolbar}>
                    {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="#FFFFFF" onClick={logout}>Logout</Button>
                    </div>
                    ) : (
                    <Button className={classes.button} variant='outlined' component={Link} to="/auth" >Sign In</Button>
                    )}
                </Toolbar>
            
        </AppBar>
    );
}
    


export default Navbar;