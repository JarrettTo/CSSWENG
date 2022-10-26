import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
const App = () => {
    return (
        <BrowserRouter>
            <Container   maxWidth="lg"> {/*equivalent of a div, lg means large*/} 
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />

                </Switch>
                
            </Container>
        </BrowserRouter>
        
    );
}

export default App;