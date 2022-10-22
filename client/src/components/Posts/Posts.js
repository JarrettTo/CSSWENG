import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import useStyles from './styles';
const Posts = () => {
    const posts= useSelector((state)=> state.posts) //gets the posts from the posts.js reducer by extracting it from the store state declared in main index

    console.log(posts);
    return(
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;