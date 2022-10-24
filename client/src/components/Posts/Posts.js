import React from 'react';
<<<<<<< Updated upstream
=======
import { Grid, CircularProgress } from '@material-ui/core';

>>>>>>> Stashed changes
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import useStyles from './styles';
const Posts = () => {
<<<<<<< Updated upstream
    const posts= useSelector((state)=> state.posts) //gets the posts from the posts.js reducer by extracting it from the store state declared in main index

    console.log(posts);
=======
    const posts= useSelector((state)=> state.posts); //gets the posts from the posts.js reducer by extracting it from the store state declared in main index
    const classes = useStyles();
    
   
>>>>>>> Stashed changes
    return(
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;