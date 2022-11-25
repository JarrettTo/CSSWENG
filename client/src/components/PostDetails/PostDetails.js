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
    const txn=useSelector((state) => state.txn);
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const classes=useStyles();
    const [form, setForm]= useState({      //initializes postData to the ff values. we set "setPostData" as the setter function for the state variable "postData"
        contactNumber: '',
        dlsu_id:'',
        college: '',
        degree: '',
        altClass: '',
        payment:'',
    });
    
    const [trigger,setTrigger]=useState(false);
    const [loading,setLoading]=useState(true);
    const selPost=posts.find((e)=>{ return e._id==id});
    
    useEffect(()=>{
        console.log(posts)
        dispatch(getPosts(id));
        setUser(JSON.parse(localStorage.getItem('profile')));
        setLoading(true);
        dispatch(getTxn(id));
    },[trigger])
 

    const handleSubmit=(e)=>{

        e.preventDefault(); 
        console.log(form);
        dispatch(registerPost(id, form));
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
            <Typography>Status: {txn?.status}</Typography>
            <Typography>Register for event:</Typography>
            {(!selPost?.registeredUsers?.find((e)=> e==user.result._id) && !selPost?.acceptedUsers?.find((e)=> e==user.result._id))?(
                <>
                <TextField name='Contact Number' variant='outlined' label="Contact Number" fullWidth value={form.contactNumber} onChange={(e)=>{setForm({...form ,contactNumber: e.target.value})}}/>
                {(user?.result?.dlsu) ? (
                    <>
                        <TextField name='ID Number' variant='outlined' label="ID Number" fullWidth value={form.dlsu_id} onChange={(e)=>{setForm({...form ,dlsu_id: e.target.value})}}/>
                        <TextField name='College' variant='outlined' label="College" fullWidth value={form.college} onChange={(e)=>{setForm({...form ,college: e.target.value})}}/>
                        <TextField name='Degree Program' variant='outlined' label="Degree Program" fullWidth value={form.degree} onChange={(e)=>{setForm({...form ,degree: e.target.value})}}/>
                        <TextField name='Alternative Class' variant='outlined' label="Alternative Class" fullWidth value={form.altClass} onChange={(e)=>{setForm({...form ,altClass: e.target.value})}}/>
                    </>
                ): null}
                {(!user?.result?.dlsu || user?.result?.claimed) ? (
                    <>
                        
                        <Typography>Payment Details: 09270164346 GCASH JUSTIN TO</Typography>
                        <Typography>PROOF OF PAYMENT:</Typography>
                        <div className={classes.fileInput}>
                            <FileBase type ="file"multiple={false} onDone={({base64})=> setForm({...form ,payment: base64})}/>
                        </div>
                        <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Register</Button>
                        
                    </>
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