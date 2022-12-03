import React, { useEffect } from "react";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, CssBaseline} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Grid} from '@material-ui/core';
import moment from 'moment';    
import { useParams, useHistory } from 'react-router-dom';
import { getPost, getPosts, registerPost } from "../../actions/posts";
import regBg from '../../images/regBg.png';
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
    const selPost=posts.find((e)=>{ return e._id==id});
    // const mainPub = {selPost?.selectedFile}.replace('data:image/png;base64,', '');
    

    useEffect(()=>{

        dispatch(getPosts());
        setUser(JSON.parse(localStorage.getItem('profile')));
        dispatch(getTxn(id));
        dispatch(getTxns());
    },[trigger])
 

    const handleSubmit=(e)=>{

        
        console.log(form);
        dispatch(registerPost(id, form));
        setTrigger(!trigger)
        window.location.reload(false);
        
              
        
    }
    return (
       
        <Grid container alignItems="stretch" spacing={3}>
            {selPost?.title}
            {selPost?.description}
            {selPost?.price}
            {selPost?.date}
            {selPost?.tags}
            {selPost?.registeredUsers}

            <CssBaseline />

            <main>
                {/* SHOW TITLE */}
                <div>
                    <Container>
                        <Typography gutterBottom className={classes.title} >
                            {selPost?.title}
                        </Typography>
                    </Container>
                </div>

                {/* 1ST SECTION: SHOW INFORMATION INSIDE CLOUDY CONTAINER */}
                <div>
                    <Container className={classes.infoBox}>
                        <Container className={classes.innerInfo}>
                            {/* left */}
                            <Container className={[classes.innerBox, classes.left]}> 

                                {/* insert uploaded images by the creator */}
                                <Container className={classes.descImg}>-insert image-</Container>
                                
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
                                        <Typography className={classes.venue}>HAPPENING AT -insert venue-</Typography>
                                    </Container>
                                    
                                    <Container>
                                        <Typography className={classes.description}>{selPost?.description}</Typography>
                                    </Container>

                                    <Container className={classes.bottomInfo}>
                                        <Container className={classes.price}>
                                            <Typography className={classes.bottomValue}>PHP {selPost?.price}.00</Typography>
                                            <Typography className={classes.bottomTitle}>TICKET PRICE</Typography>
                                        </Container>
                                        <Container className={classes.date}>
                                            <Typography className={classes.bottomValue}>{selPost?.date}</Typography>
                                            <Typography className={classes.bottomTitle}>DATE</Typography>
                                        </Container>
                                    </Container>
                                </Container>

                            </Container>
                        </Container>
                    </Container>
                </div>


                {/* 2ND SECTION: MAIN PUB, CAPTION, AND REGISTRATION */}
                <div>
                    <Container className={classes.infoBox2}>

                        <Container className={classes.left2}>       
                            <Container className={classes.mainPub}>-insert main pub-{selPost?.file}</Container>
                            <Container className={classes.caption}>
                                -insert caption here-<br></br>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint magnam nam ex sed. Officiis sint in reprehenderit veniam exercitationem repellat expedita, vitae eum placeat laboriosam ipsum inventore itaque praesentium quisquam soluta unde quibusdam provident voluptatum dicta, aliquid illo hic, saepe modi. Sequi earum molestias illo consequuntur aliquid pariatur sed.
                            </Container>
                        </Container>

                        <Container className={classes.right2}>
                            <img className={classes.ticketbg} src={regBg} height="600"/>

                            <Container className={classes.registration}>
                               
                            <Typography>Status: {txn ? txn.status: "No Recorded transaction" }</Typography>
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
                                 <Typography>STATUS: {txn.status}</Typography>
                            </Container>
                            
                        </Container>
                    </Container>
                </div>
            </main>



        </Grid>
        
    );
};

const checkRegister=(post, user)=>{
   return post?.registeredUsers.findIndex(user?.id);
}
export default PostDetails;