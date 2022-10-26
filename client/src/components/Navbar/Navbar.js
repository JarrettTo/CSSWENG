import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';
import caologo from '../../images/caologo.jpg';

const Navbar = () => {
    const classes = useStyles();

    
    return(
        <AppBar position="static" color="inherit" className={classes.appBar}> {/*appbar is the one on top that desnt move even when ure scrolling*/}
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.typography} varaint="hs" align="center">DLSU CAO Ticketing Site</Typography>
                <img className={classes.image} src={caologo} alt="memories" height="60"/> {/*className is like defining a class in HTML*/}
            </div>
            
        </AppBar>
    );
}
    


export default Navbar;