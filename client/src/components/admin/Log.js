import React, { useEffect } from "react";
import FileBase from 'react-file-base64';

import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Card} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, getPosts, registerPost } from "../../actions/posts";
import { approveTxn, declineTxn } from "../../actions/transactions";

const Log = ({log}) =>{

    
    

    /*useEffect(()=>{
        dispatch(getPosts());
    },[trigger])

    const selPost=posts.find((e)=>{ return e._id==txn.postID});
    console.log(selPost?.title);
    
    const dispatch= useDispatch();
    const approve = () =>{
        
        dispatch(approveTxn(txn._id, selPost));
        setTrigger(!trigger);
    }
    const decline = () =>{
        dispatch(declineTxn(txn._id));
        setTrigger(!trigger);
    }*/
    return(
        <Card>
            {log? (<Typography>Post: {log?.postID}</Typography>) : null}
            
            <Typography>Txn: {log.txnID}</Typography>
            <Typography>User : {log.userID}</Typography>
            <Typography>TimeIn : {log.timeIn}</Typography>
            <Typography>TimeOut : {log.timeOut}</Typography>
            
            
        </Card>
    )
}

export default Log;