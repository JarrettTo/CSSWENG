import React, { useEffect } from "react";


import { useState } from "react";
import { Typography, Button, Grid} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from "../../actions/posts";
import { getTxns } from "../../actions/transactions";
import { useHistory } from "react-router-dom";
import useStyles from './styles';

/*@brief: Admin Page
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enrqiuez
*/
const Admin = () => {

    const classes = useStyles();
    const txns = useSelector((state)=> state.txns);
    const posts = useSelector((state)=>state.posts);
    const selPost=(id)=>posts.find((e)=>{ return e._id==id});
    const history=useHistory();
    const dispatch= useDispatch();
    const [lTxn, setlTxn]= useState(false);
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("profile"))?.result.admin){         //prevents non admin users from accessing this page
            history.push('/');
        }
        dispatch(getTxns());
        dispatch(getPosts());
    },[])

    /*@brief: load transactions page
    * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enrqiuez
    */
    const loadTxns=()=>{
        history.push("/transactions");
    }
    /*@brief: load attendance page
    * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enrqiuez
    */
    const loadAttendance=()=>{
        history.push("/attendance");
    }
    return(
        <div>
        <Typography className={classes.title} variant="h2">Dashboard</Typography>
        
        <Grid container alignItems="stretch" spacing={2}>
        <Button className={classes.button} type="submit"  variant="contained"  onClick={loadTxns}>Transactions</Button>
        <Button className={classes.button} type="submit"  variant="contained"  onClick={loadAttendance}>Attendance Log</Button>
        </Grid>

        
        </div>
    )
}

export default Admin;