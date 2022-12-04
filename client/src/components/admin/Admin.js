import React, { useEffect } from "react";
import FileBase from 'react-file-base64';

import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Grid} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { getPost, getPosts, registerPost } from "../../actions/posts";
import { getTxns } from "../../actions/transactions";
import { useHistory } from "react-router-dom";
const Admin = () => {
    
    const classes = useStyles();
    const txns = useSelector((state)=> state.txns);
    const posts = useSelector((state)=>state.posts);
    const selPost=(id)=>posts.find((e)=>{ return e._id==id});
    const history=useHistory();
    const dispatch= useDispatch();
    const [lTxn, setlTxn]= useState(false);
    useEffect(() => {
        dispatch(getTxns());
        dispatch(getPosts());
    },[])
    const loadTxns=()=>{
        history.push("/transactions");
    }
    const loadAttendance=()=>{
        history.push("/attendance");
    }
    return(
        <div>
        <Typography className={classes.title} variant="h1">Dashboard</Typography>
        
        <Grid container alignItems="stretch" spacing={3}>
            <Button onClick={loadTxns}>Transactions</Button>
            <Button onClick={loadAttendance}>Attendance Log</Button>
        </Grid>

        
        </div>
    )
}

export default Admin;