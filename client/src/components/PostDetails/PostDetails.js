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
import { getTxn } from "../../actions/transactions";
import regBg from '../../images/regBg.png';


const PostDetails = () => {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    
    const {posts}=useSelector((state) => state.posts);
    
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const classes=useStyles();
    const [file, setFile]= useState(null);
    const [txn, setTxn]=useState(getTxn(id));
    const [trigger,setTrigger]=useState(false);
    const selPost=posts.find((e)=>{ return e._id==id});
    // const mainPub = {selPost?.selectedFile}.replace('data:image/png;base64,', '');
    
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
       
        <Grid>
            {/* {selPost?.title} */}
            {/* {selPost?.description} */}
            {/* {selPost?.price} */}
            {/* {selPost?.date} */}
            {/* {selPost?.tags} */}
            {/* {selPost?.registeredUsers} */}
            {/* {selPost?.selectedFile} */}

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
                               
                                {(!selPost?.registeredUsers?.find((e)=> e==user.result._id) && !selPost?.acceptedUsers?.find((e)=> e==user.result._id))?(
                                    <>
                                    {(!user?.result?.dlsu || user?.result?.claimed) ? (
                                        <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                                        
                                            
                                            <Typography className={classes.regHeading}>REGISTER HERE</Typography>
                                            
                                            
                                            <Typography className={classes.formTitle}>Full Name *</Typography>
                                            <TextField/>

                                            <Typography className={classes.formTitle}>DLSU Email *</Typography>
                                            <TextField/>

                                            <Typography className={classes.formTitle}>Complete ID Number *</Typography>
                                            <TextField/>

                                            <Typography className={classes.formTitle}>College *</Typography>
                                            <TextField/>


                                            {/* <Typography>Payment Details: 09270164346 GCASH JUSTIN TO</Typography> */}

                                            <Typography className={classes.formPayment}>Proof of Payment *</Typography>
                                            <div className={classes.fileInput}>
                                                <FileBase type ="file"multiple={false} onDone={({base64})=> setFile(base64)}/>
                                            </div>


                                            <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Register</Button>
                                            
                                        </form>
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

        // <Grid container alignItems="stretch" spacing={3}>
            // {selPost?.title}
            // {selPost?.description}
            // {selPost?.price}
            // {selPost?.date}
            // {selPost?.tags}
            // {selPost?.registeredUsers}
            // <CssBaseline />
            // <Typography>Status: {txn.status}</Typography>
            // {(!selPost?.registeredUsers?.find((e)=> e==user.result._id) && !selPost?.acceptedUsers?.find((e)=> e==user.result._id))?(
            //     <>
            //     {(!user?.result?.dlsu || user?.result?.claimed) ? (
            //         <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
            //             <Typography>Register for event:</Typography>
            //             <Typography>Payment Details: 09270164346 GCASH JUSTIN TO</Typography>
            //             <Typography>PROOF OF PAYMENT:</Typography>
            //             <div className={classes.fileInput}>
            //                 <FileBase type ="file"multiple={false} onDone={({base64})=> setFile(base64)}/>
            //             </div>
            //             <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Register</Button>
                        
            //         </form>
            //     ): <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Register</Button> }
                
                
            //     </>
            // ):<Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Unregister</Button> }
            
        // </Grid>
    );
};

const checkRegister=(post, user)=>{
   return post?.registeredUsers.findIndex(user?.id);
}
export default PostDetails;