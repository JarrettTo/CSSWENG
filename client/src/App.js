import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { getPosts } from './actions/posts';

import PostDetails from './components/PostDetails/PostDetails'
import SearchBar from './components/SearchBar/SearchBar';
const App = () => {
    const dispatch=useDispatch();   
    
    return (
        <BrowserRouter>
            <Container   maxWidth="lg"> {/*equivalent of a div, lg means large*/} 
                <Navbar />
                <SearchBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/posts/:id" component={PostDetails} />
                </Switch>
                
            </Container>
        </BrowserRouter>
        
    );
}

export default App;