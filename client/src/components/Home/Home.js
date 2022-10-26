import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid} from '@material-ui/core';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {getPosts} from '../../actions/posts';
const Home = () => {
    const classes= useStyles();
    const dispatch = useDispatch();

    useEffect(() => {       //everything called here will get called after the react app is started
        dispatch(getPosts());   //dispatch is used to trigger an action that'll affect our state (check main index.js store variable)
    },[dispatch])

    return(
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
    )
}

export default Home