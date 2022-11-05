import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Paper} from '@material-ui/core';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from '../../actions/posts';
import Pagination from '../Pagination';
const Home = () => {
    const [currentID, setCurrentID] = useState(null);
    const classes= useStyles();
    const dispatch = useDispatch();

    useEffect(() => {       //everything called here will get called after the react app is started
        dispatch(getPosts());   //dispatch is used to trigger an action that'll affect our state (check main index.js store variable)
    },[currentID, dispatch])        //the dependency arrays, currentID and dispatch, when changed, trigger the contents of use effect
    //const posts= useSelector((state)=> state.posts);
    //console.log(posts)
    return(
        <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentID={setCurrentID}/>
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentID={currentID} setCurrentID={setCurrentID}/>
                        <Paper elevation={6}>
                            <Pagination />
                        </Paper>
                    </Grid>
                </Grid>
        </Grow>
    )
}

export default Home