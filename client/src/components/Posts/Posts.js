/*@brief: render all posts
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
*/
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import useStyles from './styles';

const Posts = ({setCurrentID}) => {
    const { posts }= useSelector((state)=> state.posts); //gets the posts from the posts.js reducer by extracting it from the store state declared in main index
    //console.log(posts)
    const classes = useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));

   
    return(
        !posts?.length ? <CircularProgress /> : (          
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {console.log(posts)}
                
                {posts.map((post) => (
                    <Grid key={post._id} item xs={4} sm={6} md={4}>
                        <Post post={post} setCurrentID={setCurrentID} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Posts;