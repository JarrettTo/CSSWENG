import React, { useEffect } from "react";
import FileBase from 'react-file-base64';

import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Grid} from '@material-ui/core';
import Txn from "./Txn.js";
import { useDispatch, useSelector } from 'react-redux';
import { getPost, getPosts, registerPost } from "../../actions/posts";
import { getTxns } from "../../actions/transactions";
const Admin = () => {
    const txns = useSelector((state)=> state.txns);
    const {posts} = useSelector((state)=>state.posts);
    const selPost=(id)=>posts.find((e)=>{ return e._id==id});
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getTxns());
        dispatch(getPosts());
    },[])
    return(
        <Grid container alignItems="stretch" spacing={3}>
            {console.log(txns)};
            {!txns.length ? <CircularProgress />: (
            txns.map((txn) => (
                <Grid key={txn._id} item xs={12} sm={6}>
                    <Txn txn={txn} post={selPost} />
                </Grid>
            ))) }
        </Grid>
    )
}

export default Admin;