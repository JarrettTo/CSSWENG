import React, { useEffect } from "react";
import FileBase from 'react-file-base64';
import Log from './Log';
import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Grid} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getLogs } from "../../actions/attendance";
import { useHistory } from "react-router-dom";
const Attendance = () => {
    const logs = useSelector((state)=> state.logs);
    const history=useHistory();
    //const selPost=(id)=>posts.find((e)=>{ return e._id==id});
    const dispatch= useDispatch();
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("profile"))?.result.admin){
            history.push('/');
        }
        dispatch(getLogs());
    },[])
    return(
        <Grid container alignItems="stretch" spacing={3}>
            {console.log(logs)};
            {!logs.length ? <CircularProgress />: (
            logs.map((log) => (
                <Grid key={log._id} item xs={12} sm={6}>
                    <Log log={log} />
                </Grid>
            ))) }
        </Grid>
    )
}

export default Attendance;