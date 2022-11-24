import React, {useEffect} from 'react';
import * as actionType from '../../constants/actiontypes';
import { Link, useHistory, useLocation} from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import caologo from '../../images/caologo.jpg';
import { useState } from 'react';

const Navbar = () => {
    const dispatch = useDispatch();
    const history=useHistory();
    const classes = useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const location =useLocation();
    console.log(user);
    useEffect(()=>{
        const token=user?.tokenID;
    
        setUser(JSON.parse(localStorage.getItem('profile')));

    },[location])
    const logout = ()=>{
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    }
    return(
        <AppBar position="static" color="inherit" className={classes.appBar}> {/*appbar is the one on top that desnt move even when ure scrolling*/}
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.typography} varaint="hs" align="center">DLSU CAO Ticketing Site</Typography>
                <img className={classes.image} src={caologo} alt="memories" height="60"/> {/*className is like defining a class in HTML*/}
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                <div className={classes.profile}>
                    
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
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