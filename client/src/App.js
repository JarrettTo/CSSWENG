import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Paper } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import PostDetails from './components/PostDetails/PostDetails'
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
    const dispatch=useDispatch();   
    const classes=useStyles();
    return (
        <Paper className={classes.paperContainer}>
            <BrowserRouter>
            <Navbar />
            <div className={classes.container}>
                <Container className={classes.container} maxWidth="lg"> {/*equivalent of a div, lg means large*/} 
                    {/* <SearchBar /><br></br> */}
                    <Switch>
                        <Route path="/" exact component={() => <Redirect to ="/posts"/>} />
                        <Route path="/posts" exact component={Home} />
                        <Route path="/posts/search" exact component={Home} />
                        <Route path="/auth" exact component={Auth} />
                        <Route path="/posts/:id" component={PostDetails} />
                        
                    </Switch>

                </Container>
            </div>
            
            </BrowserRouter>
        </Paper>
    );
}

export default App;