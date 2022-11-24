import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts.js';
import  {updatePost} from '../../actions/posts.js';
const Form = ({currentID, setCurrentID}) => {
    console.log(currentID);
    const post= useSelector((state)=>{ 
        if(currentID!=null){
            for(var i=0;i<state.posts.length;i++){
                if(state.posts[i]._id==currentID){
                    return state.posts[i]
                }
            }
        }
    });    //gets the posts from the state tree to find an iteration with the same "_id" and returns that post. if none is found or current id is null, then it'll return null

    console.log("Post:" + post);
    const [postData, setPostData] = useState({      //initializes postData to the ff values. we set "setPostData" as the setter function for the state variable "postData"
        title: '',
        date: '',
        price: '',
        description: '',
        creator: '',
        tags: '',
        id: '',
        noOfAttendees: '',
        maxAttendees: '',
        selectedFile: '',

    })
 
      
    const classes=useStyles();
    const dispatch=useDispatch();               //allows us to dispatch an action
    const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(()=>{
        if(post) setPostData(post)  
    },[post])       //[post], or the dependency array, when changed, triggers the useEffect function
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentID!=null){                    
            dispatch(updatePost(currentID, {...postData,name: user?.result?.id}));
            clear();
        }
        else{
            dispatch(createPost({...postData,name: user?.result?.id}));             //dispatches our createPost function from our actions with the parameter of our new object created by filling up the form
            clear();
        }
       
          
    }
    if(!user?.result){
        return(
            <Paper>
                <Typography> Please Sign In or Sign Up First!</Typography>
            </Paper>
        )
    }
    const clear = () =>{
        setCurrentID(null)
        setPostData({      //initializes postData to the ff values. we set "setPostData" as the setter function for the state variable "postData"
            title: '',
            date: '',
            price: '',
            description: '',
            creator: '',
            tags: '',
            id: '',
            noOfAttendees: '',
            maxAttendees: '',
            selectedFile: '',
    
        })
    }
    return(
        <Paper className={classes.paper}>       {/*adds a white bg*/}
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography>Add an event:</Typography>
                <TextField name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(e)=>{setPostData({...postData ,creator: e.target.value})}}/>   {/*e.target.value basically just takes the new value of the textfrield. the onchange attribute ensures that it only changes whenever there is a change to the textfield*/}
                <TextField name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e)=>{setPostData({...postData ,title: e.target.value})}}/>
                <TextField name='description' variant='outlined' label="Description" fullWidth value={postData.description} onChange={(e)=>{setPostData({...postData ,description: e.target.value})}}/>
                <TextField name='date' variant='outlined' label="Date" fullWidth value={postData.date} onChange={(e)=>{setPostData({...postData ,date: e.target.value})}}/>
                <TextField name='price' variant='outlined' label="Price" fullWidth value={postData.price} onChange={(e)=>{setPostData({...postData ,price: e.target.value})}}/>
                <TextField name='maxAttendees' variant='outlined' label="Max Attendees" fullWidth value={postData.maxAttendees} onChange={(e)=>{setPostData({...postData ,maxAttendees: e.target.value})}}/>
                <TextField name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e)=>{setPostData({...postData ,tags: e.target.value.split(',')})}}/>
                <div className={classes.fileInput}>
                    <FileBase type ="file"multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit </Button>
                <Button className={classes.buttonSubmit} variant="container" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
        
    );
}

export default Form;    