import React, { useEffect } from "react";
import FileBase from 'react-file-base64';

import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Grid} from '@material-ui/core';
import Txn from "./Txn.js";
import { useDispatch, useSelector } from 'react-redux';
import { getTxns } from "../../actions/transactions";
const Admin = () => {
    const txns = useSelector((state)=> state.txns);
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getTxns());
    },[])
    return(
        <Grid container alignItems="stretch" spacing={3}>
            {console.log(txns)};
            {!txns.length ? <CircularProgress />: (
            txns.map((txn) => (
                <Grid key={txn._id} item xs={12} sm={6}>
                    <Txn txn={txn} />
                </Grid>
            ))) }
        </Grid>
    )
}

export default Admin;