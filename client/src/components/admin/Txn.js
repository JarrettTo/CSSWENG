import React, { useEffect } from "react";
import FileBase from 'react-file-base64';

import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Card} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const Txn = (txn) =>{
    
    txn=txn.txn
    return(
        <Card>
            <Typography>Date of Order: {txn.date}</Typography>
            <Typography>Name : {txn.firstName +" "+ txn.lastName}</Typography>
            <Typography>Email : {txn.email}</Typography>
            <Typography>Contact Number : {txn.contactNumber}</Typography>
            <Typography>{txn.dlsu_id ? "ID :" + txn.dlsu_id : null}</Typography>
            <Typography>{txn.college ? "College :" + txn.college : null}</Typography>
            <Typography>{txn.degree ? "Degree :" + txn.degree : null}</Typography>
            <Typography>{txn.altClass ? "Alt Class :" + txn.altClass : null}</Typography>
            <Typography>{txn.status ? "Current Status :" + txn.status : null}</Typography>
        </Card>
    )
}

export default Txn;