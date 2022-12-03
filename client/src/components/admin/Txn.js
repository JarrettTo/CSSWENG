import React, { useEffect } from "react";
import FileBase from 'react-file-base64';

import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Card} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, getPosts, registerPost } from "../../actions/posts";
import { approveTxn, declineTxn } from "../../actions/transactions";

const Txn = ({txn}) =>{
    const [trigger, setTrigger] = useState(false);
    const posts = useSelector((state)=>state.posts);
    
    

    useEffect(()=>{
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
    }
    return(
        <Card>
            {selPost? (<Typography>Post: {selPost?.title}</Typography>) : null}
            
            <Typography>Date of Order: {txn.date}</Typography>
            <Typography>Name : {txn.firstName +" "+ txn.lastName}</Typography>
            <Typography>Email : {txn.email}</Typography>
            <Typography>Contact Number : {txn.contactNumber}</Typography>
            <Typography>{txn.dlsu_id ? "ID :" + txn.dlsu_id : null}</Typography>
            <Typography>{txn.college ? "College :" + txn.college : null}</Typography>
            <Typography>{txn.degree ? "Degree :" + txn.degree : null}</Typography>
            <Typography>{txn.altClass ? "Alt Class :" + txn.altClass : null}</Typography>
            <Typography>{txn.status ? "Current Status :" + txn.status : null}</Typography>
            {txn.status == 'Pending' || txn.status == 'Rejected' ? (<Button onClick={approve}>Approve</Button>): (<Button onClick={decline}>Decline</Button>)}
            
            
        </Card>
    )
}

export default Txn;