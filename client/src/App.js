import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Paper, CssBaseline } from '@material-ui/core';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Admin from './components/admin/Admin';
import QR from './components/admin/QR';
import Txns from './components/admin/Txns'
import { getPosts } from './actions/posts';
import useStyles from './styles';
// import useStyles from './GlobalStyles';
import Attendance from './components/admin/Attendance';
import PostDetails from './components/PostDetails/PostDetails'



const App = () => {
    const dispatch=useDispatch();   
    const classes=useStyles();
    return (
            <Paper className={classes.paperContainer}>
                <CssBaseline />
                <BrowserRouter>
                <Navbar />
                <Container className={classes.body}> {/*equivalent of a div, lg means large*/} 
                   
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path="/posts" exact component={Home} />
                        <Route path="/posts/search" exact component={Home} />
                        <Route path="/posts/regposts" exact component={Home} />
                        <Route path="/auth" exact component={Auth} />
                        <Route path="/posts/:id" component={PostDetails} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/scan" component={QR} />
                        <Route path="/transactions" component={Txns} />
                        <Route path="/attendance" component={Attendance} />
                    </Switch>

                </Container>
                
                </BrowserRouter>
            </Paper>
    );
}

export default App;