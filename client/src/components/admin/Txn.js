import React, { useEffect } from "react";


import { useState } from "react";
import {  Typography,Button, Card} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {  getPosts } from "../../actions/posts";
import { approveTxn, declineTxn } from "../../actions/transactions";
import useStyles from './styles';

/*@brief: rendering of individual transaction 
* @params: txn
* txn: transaction
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
*/

const Txn = ({txn}) =>{
    const [trigger, setTrigger] = useState(false);
    const {posts} = useSelector((state)=>state.posts);
    const classes = useStyles();
    
    

    useEffect(()=>{
        dispatch(getPosts());
    },[trigger])

    const selPost=posts.find((e)=>{ return e._id==txn.postID});

    
    const dispatch= useDispatch();

    /*@brief: approve transaction
    * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enrqiuez
    */
    const approve = () =>{
        
        dispatch(approveTxn(txn._id, selPost));
        setTrigger(!trigger);
    }

    /*@brief: decline transaction
    * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enrqiuez
    */
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
            {txn.status == 'Pending'  ? (
                <>
                <Button className={classes.button1} type="submit"  variant="contained" onClick={approve}>Approve</Button>
                <Button className={classes.button2} type="submit"  variant="contained" onClick={decline}>Decline</Button>
                </>
            ): null}
            {txn.status == 'Accepted'  ? (<Button className={classes.button1} type="submit"  variant="contained" onClick={decline}>Decline</Button>): null}
            
        </Card>
    )
}

export default Txn;