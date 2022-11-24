import React, { useEffect } from "react";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Grid} from '@material-ui/core';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, getPosts, registerPost } from "../../actions/posts";
import { getTxn } from "../../actions/transactions";
const PostDetails = () => {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    
    const posts=useSelector((state) => state.posts);
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const classes=useStyles();
    const [file, setFile]= useState(null);
    const [txn, setTxn]=useState(getTxn(id));
    const [trigger,setTrigger]=useState(false);
    const selPost=posts.find((e)=>{ return e._id==id});
    
    useEffect(()=>{
        console.log(posts)
        dispatch(getPosts(id));
        setUser(JSON.parse(localStorage.getItem('profile')));
        setTxn(getTxn(id));
    },[trigger])
 

    const handleSubmit=(e)=>{

        e.preventDefault(); 
        console.log(file);
        dispatch(registerPost(id, file));
        setTrigger(!trigger)
        
        
              
        
    }
    return (

        <Grid container alignItems="stretch" spacing={3}>
            {selPost?.title}
            {selPost?.description}
            {selPost?.price}
            {selPost?.date}
            {selPost?.tags}
            {selPost?.registeredUsers}
            <Typography>Status: {txn.status}</Typography>
            {(!selPost?.registeredUsers?.find((e)=> e==user.result._id) && !selPost?.acceptedUsers?.find((e)=> e==user.result._id))?(
                <>
                {(!user?.result?.dlsu || user?.result?.claimed) ? (
                    <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                        <Typography>Register for event:</Typography>
                        <Typography>Payment Details: 09270164346 GCASH JUSTIN TO</Typography>
                        <Typography>PROOF OF PAYMENT:</Typography>
                        <div className={classes.fileInput}>
                            <FileBase type ="file"multiple={false} onDone={({base64})=> setFile(base64)}/>
                        </div>
                        <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Register</Button>
                        
                    </form>
                ): <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Register</Button> }
                
                
                </>
            ):<Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Unregister</Button> }
            
        </Grid>
    );
};

const checkRegister=(post, user)=>{
   return post?.registeredUsers.findIndex(user?.id);
}
export default PostDetails;