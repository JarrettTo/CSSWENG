import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts';
import caologo from './images/caologo.jpg';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';
const App = () => {
    const classes= useStyles();
    const dispatch = useDispatch();

    useEffect(() => {       //everything called here will get called after the react app is started
        dispatch(getPosts());   //dispatch is used to trigger an action that'll affect our state (check main index.js store variable)
    },[dispatch])
    return (
        <Container   maxWidth="lg"> {/*equivalent of a div, lg means large*/} 
            <AppBar position="static" color="inherit" className={classes.appBar}> {/*appbar is the one on top that desnt move even when ure scrolling*/}
                <Typography className={classes.typography} varaint="hs" align="center">DLSU CAO Ticketing Site</Typography>
                <img className={classes.image} src={caologo} alt="memories" height="60"/> {/*className is like defining a class in HTML*/}
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    );
}

export default App;