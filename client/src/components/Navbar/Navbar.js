import React, {useEffect} from 'react';
import * as actionType from '../../constants/actiontypes';
import { Link, useHistory, useLocation} from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button, createTheme, responsiveFontSizes, ThemeProvider,Hidden } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import caologo from '../../images/image.png';
import { useState } from 'react';
import {getPosts} from '../../actions/posts';

/*@brief: Navigation Bar
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
*/
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

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
    const adminPage= ()=>{
        history.push(`/admin`);
    }
    const scanQr= ()=>{
        history.push(`/scan`);
    }
    const refresh = ()=>{
        history.push(`/`);
        dispatch(getPosts());

    }
    return(
        <AppBar position="static" color="inherit" className={classes.appBar}> {/*appbar is the one on top that desnt move even when ure scrolling*/}
            <div className={classes.brandContainer}>
                <img className={classes.image} src={caologo} alt="memories" />
                <ThemeProvider theme={theme}>
                    <Typography component={Link} to="/" onClick={refresh} className={classes.typography} variant="h3" align="center">DLSU CAO 
                    <Hidden xsDown>&nbsp;Ticketing Hub</Hidden> </Typography>
                </ThemeProvider>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                <div className={classes.profile}>
                    <Typography component={Link} to="/" className={classes.home}>HOME</Typography>
                    <Typography  className={classes.home} noWrap>ABOUT US</Typography>
                    <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                    <Button variant="outlined" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
                ) : (
                <div className={classes.profile}>
                    <Typography component={Link} to="/" className={classes.home}>HOME</Typography>
                    <Typography className={classes.home}>ABOUT US</Typography>
                    <Button variant="outlined" component={Link} className={classes.button} to="/auth">Sign In</Button>
                </div>

                )}
            
                { user?.result.admin ?(
                <div className={classes.profile}>
                <Button variant="outlined" className={classes.admin} onClick={adminPage}>Admin Page</Button>
                <Button variant="outlined" className={classes.admin} onClick={scanQr}>QR Scanner</Button>
                </div>
                ): null}
                        
            </Toolbar>        
            
        </AppBar>
    );
}
    


export default Navbar;