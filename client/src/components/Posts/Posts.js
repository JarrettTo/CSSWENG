import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import useStyles from './styles';
const Posts = ({setCurrentID}) => {
    const posts= useSelector((state)=> state.posts); //gets the posts from the posts.js reducer by extracting it from the store state declared in main index
    //console.log(posts)
    const classes = useStyles();
    
   
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {console.log(posts)}
                
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentID={setCurrentID} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Posts;