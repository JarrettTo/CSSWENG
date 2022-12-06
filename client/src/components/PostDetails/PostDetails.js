import React, { useEffect } from "react";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useState } from "react";
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { getPosts, registerPost } from "../../actions/posts";
import { getTxn, getTxns } from "../../actions/transactions";



const PostDetails = () => {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    
    const {posts}=useSelector((state) => state.posts);
    const txn=useSelector((state) => state.txn);
    const txns=useSelector((state) => state.txns);
    
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
    const selPost = posts?.find((e)=>{ return e._id==id});
    

    useEffect(()=>{

        dispatch(getPosts());
        setUser(JSON.parse(localStorage.getItem('profile')));
        dispatch(getTxn(id));
        dispatch(getTxns());
    },[trigger])

    const handleSubmit=(e)=>{

      
        e.preventDefault(); 
        console.log(form);
        dispatch(registerPost(id, form));
        setTrigger(!trigger)
        window.location.reload(false);

    }

    
    return (
        
        <Grid className={classes.paperhere}>
            {/* 
            {selPost?.title}
            {selPost?.description}
            {selPost?.price}
            {selPost?.date}
            {selPost?.tags}
            {selPost?.registeredUsers} 
            */}

            <main>
                

                {/* 1ST SECTION: SHOW INFORMATION INSIDE CLOUDY CONTAINER */}
                
                <Container className={classes.section1}>
                    {/* SHOW TITLE */}
                {/* <Container className={classes.titleBox}>
                    <Typography className={classes.title}>
                        {selPost?.title}
                    </Typography>
                </Container> */}

                <Container className={classes.box1}>
                    {/* left */}
                    <Container className={[classes.innerBox, classes.left]}> 
                        <img className={classes.descImg} src={selPost?.selectedFileOther}/>

                    </Container>



                    {/* right */}
                    <Container className={[classes.innerBox, classes.right]}>
                        <Container className={classes.innerRight}>
                            <Container>
                                <Typography className={classes.eventBy}>EVENT BY {selPost?.creator}</Typography>
                            </Container>

                            <Container>
                                <Typography className={classes.innerTitle}>{selPost?.title}</Typography>
                            </Container>

                            <Container>
                                <Typography className={classes.venue}>HAPPENING AT {selPost?.venue}</Typography>
                            </Container>
                            
                            <Container>
                                <Typography className={classes.description}>{selPost?.description}</Typography>
                            </Container>

                            <Container className={classes.bottomInfo}>
                                <Container className={classes.price}>
                                    <Typography className={classes.bottomValue}>PHP {selPost?.price}.00</Typography>
                                    <Typography className={classes.bottomTitle}>TICKET PRICE</Typography>
                                </Container>
                                <Container className={classes.attendees}>
                                    <Typography className={classes.bottomValue}>{selPost?.maxAttendees}</Typography>
                                    <Typography className={classes.bottomTitle}>MAX ATTENDEES</Typography>
                                    {/* <Typography className={classes.bottomTitle}>ATTENDEES</Typography> */}
                                </Container>
                                <Container className={classes.date}>
                                    <Typography className={classes.bottomValue}>{selPost?.date.replace('Z', '')}</Typography>
                                    <Typography className={classes.bottomTitle}>DATE</Typography>
                                </Container>
                            </Container>
                            
                        </Container>
                    </Container>
                    
                    
                </Container>
                </Container>
                


                {/* 2ND SECTION: MAIN PUB, CAPTION, AND REGISTRATION */}
                <Container className={classes.box2}>

                    {/* LEFT */}
                    <Container className={classes.left2}>
                        <img className={classes.mainImg} src={selPost?.selectedFile}/>
                    </Container>

                    {/* RIGHT */}
                    <Container className={classes.right2}>
                        {/* <img className={classes.ticketbg} src={regBg}/> */}

                        <Container className={classes.registration}>
                            <Container className={classes.innerReg}>
                                <Typography className={classes.regHeading}>
                                    REGISTER
                                </Typography>

                                <Typography className={classes.status}>
                                    STATUS: {txn ? txn.status: "No Recorded Transaction" }
                                </Typography>
                            </Container>
                            

                            {(!selPost?.registeredUsers?.find((e)=> e==user.result._id) && !selPost?.acceptedUsers?.find((e)=> e==user.result._id))?(
                            
                            <Container className={classes.regForm}>
                                {/* <Container className={classes.textFieldBox}> */}
                                <TextField 
                                    name='Contact Number' 
                                    variant='outlined' 
                                    label="Contact Number"
                                    value={form.contactNumber} 
                                    onChange={(e)=>{setForm({...form ,contactNumber: e.target.value})}}
                                    className={classes.textField}
                                    InputProps={{className: classes.input}}
                                />

                                {(user?.result?.dlsu) ? (

                                <>
                                    
                                    <TextField 
                                        name='ID Number' 
                                        variant='outlined' 
                                        label="ID Number" 
                                        value={form.dlsu_id} 
                                        onChange={(e)=>{setForm({...form ,dlsu_id: e.target.value})}}
                                        className={classes.textField}
                                        InputProps={{className: classes.input}}
                                    />
                                    
                                    <TextField 
                                        name='College' 
                                        variant='outlined' 
                                        label="College" 
                                        value={form.college} 
                                        onChange={(e)=>{setForm({...form ,college: e.target.value})}}
                                        className={classes.textField}
                                        InputProps={{className: classes.input}}
                                    />

                                    <TextField 
                                        name='Degree Program' 
                                        variant='outlined' 
                                        label="Degree Program" 
                                        value={form.degree} 
                                        onChange={(e)=>{setForm({...form ,degree: e.target.value})}}
                                        className={classes.textField}
                                        InputProps={{className: classes.input}}
                                    />

                                    <TextField 
                                        name='Alternative Class' 
                                        variant='outlined' 
                                        label="Alternative Class" 
                                        value={form.altClass} 
                                        onChange={(e)=>{setForm({...form ,altClass: e.target.value})}}
                                        className={classes.textField}
                                        InputProps={{className: classes.input}}
                                    />
        
                                </>

                                // </Container>

                                ): null}
                                {(!user?.result?.dlsu || user?.result?.claimed) ? (

                                <>
                                    <Container className={classes.paybox}>
                                        <Container className={classes.leftpb}>
                                            <Typography className={classes.payCha}>
                                                PAYMENT CHANNEL | GCASH
                                            </Typography>
                                            <Typography className={classes.payDeets}>
                                                0927 016 4346 (JUSTIN TO)
                                            </Typography>
                                        </Container>
                                        
                                        <Container className={classes.rightpb}>
                                            <Typography className={classes.pop}>PROOF OF PAYMENT</Typography>
                                            <Container className={classes.fileInput}>
                                                <FileBase 
                                                    className={classes.fileUpload}
                                                    type ="file"
                                                    multiple={false} 
                                                    onDone={({base64})=> setForm({...form ,payment: base64})}
                                                />
                                            </Container>
                                        </Container>
                                        
                                    </Container>
                                    
                                    
                                    <Container className={classes.btnBox}>
                                        <Button 
                                            className={classes.buttonSubmit} 
                                            variant="contained" 
                                            type="submit" 
                                            onClick={handleSubmit}>
                                                Submit
                                        </Button>
                                    </Container>
                                    
                        
                                </>

                                ): <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Register</Button> }
                            </Container>
                            
                            ):<Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Unregister</Button> }
                        </Container>
                        
                    </Container>
                </Container>

                {/* 3RD SECTION */}
                <Container className={classes.box3}>

                </Container>

            </main>



        </Grid>
        
    );
};

const checkRegister=(post, user)=>{
    return post?.registeredUsers.findIndex(user?.id);
}
export default PostDetails;