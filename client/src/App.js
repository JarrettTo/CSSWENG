import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { getPosts } from './actions/posts';

import PostDetails from './components/PostDetails/PostDetails'
const App = () => {
    const dispatch=useDispatch();   
    
    return (
        <BrowserRouter>
            <Container   maxWidth="lg"> {/*equivalent of a div, lg means large*/} 
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path="/posts/:id" component={PostDetails} />
                </Switch>
                
            </Container>
        </BrowserRouter>
        
    );
}

export default App;