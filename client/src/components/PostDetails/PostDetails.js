/*@brief: contains details of the post as well as registration form
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
*/
import React, { useEffect } from "react";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useState } from "react";
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import { getPosts, registerPost, togglePost } from "../../actions/posts";
import { getTxn, getTxns } from "../../actions/transactions";
import moment from 'moment';


const PostDetails = () => {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    
    const {posts}=useSelector((state) => state.posts);
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
    const [complete,setComplete]=useState(false);
    const [disabled,setDisabled]=useState(false);
    const selPost = posts?.find((e)=>{ return e._id==id});                  //finds post in posts reducer state based on id
    
    
    useEffect(()=>{
        
        dispatch(getPosts());
        setUser(JSON.parse(localStorage.getItem('profile')));                       //gets user data stored in local storage
        dispatch(getTxn(id));
        dispatch(getTxns());
    },[trigger])
    const toggleShow=(e)=>{                             //toggles show
        e.preventDefault();
        dispatch(togglePost(id));
        dispatch(getPosts());
        setTrigger(!trigger);
        
    }
    const handleSubmit=(e)=>{
        console.log(selPost)
        
        if(selPost.registeredUsers.find((e)=> e==user.result._id) || selPost.acceptedUsers.find((e)=> e==user.result._id)){     //if user is already registered
            dispatch(registerPost(id, form));
            setForm({      
                contactNumber: '',
                dlsu_id:'',
                college: '',
                degree: '',
                altClass: '',
                payment:'',
            })
            txn.status=null
        }
        else if(user.result.dlsu){              // check if user is dlsu and has filled out required fields for registration
            if(form.payment && form.contactNumber && form.college && form.dlsu_id && form.degree){
                e.preventDefault(); 
                console.log(form);
                dispatch(registerPost(id, form));
                
                txn?txn.status=null: null
                setComplete(false);
            
            }
        
            else{
                setComplete(true);
            }
        }
        else{               //check if non dlsu user filled out required fields
            if(form.contactNumber && form.payment){
                e.preventDefault(); 
                console.log(form);
                dispatch(registerPost(id, form));
                
                txn? txn.status=null: null
            }
            else{
                setComplete(true)
            }
        }
        setTrigger(!trigger)

    }

    
    return (
        
        <Grid className={classes.paperhere}>
            

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
                                    <Typography className={classes.bottomValue}>{selPost?.status=="Open"? "Open": "Closed"}</Typography>
                                    <Typography className={classes.bottomTitle}>SHOW STATUS</Typography>
                                </Container>
                                <Container className={classes.attendees}>
                                    <Typography className={classes.bottomValue}>{selPost?.maxAttendees}</Typography>
                                    <Typography className={classes.bottomTitle}>MAX ATTENDEES</Typography>
                                    <Typography className={classes.bottomValue}>{selPost?.noOfAttendees}</Typography>
                                    <Typography className={classes.bottomTitle}>NUMBER OF ATTENDEES</Typography>
                                    {/* <Typography className={classes.bottomTitle}>ATTENDEES</Typography> */}
                                </Container>
                                <Container className={classes.date}>
                                    <Typography className={classes.bottomValue}>{moment(selPost?.date).local().format('YYYY-MM-DD HH:mm')}</Typography>
                                    <Typography className={classes.bottomTitle}>DATE</Typography>
                                    <Typography className={classes.bottomValue}>{moment(selPost?.expiryDate).local().format('YYYY-MM-DD HH:mm')}</Typography>
                                    <Typography className={classes.bottomTitle}>DEADLINE OF REGISTRATION</Typography>
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
                                    STATUS: { txn?.status?txn.status : "No Recorded Transaction" }
                                </Typography>
                                <Typography className={classes.status}>
                                    { selPost?.status!="Open" ? "\nThis show is currently not allowing registrations" : null}
                                </Typography>
                            </Container>
                            
                            {/* if user is not registered, render these register questions */}
                            {(!selPost?.registeredUsers?.find((e)=> e==user.result._id) && !selPost?.acceptedUsers?.find((e)=> e==user.result._id)) && selPost?.status=="Open" ?(
                            <>
                            {complete? (<Typography> Please Fill In The Fields</Typography>): null}
                            <Container className={classes.regForm}>
                                {/* <Container className={classes.textFieldBox}> */}
                                <TextField
                                    required 
                                    name='Contact Number' 
                                    variant='outlined' 
                                    label="Contact Number"
                                    value={form.contactNumber} 
                                    onChange={(e)=>{setForm({...form ,contactNumber: e.target.value})}}
                                    className={classes.textField}
                                    InputProps={{className: classes.input}}
                                />
                                {/*if user is from dlsu, render these questions */}
                                {(user?.result?.dlsu) ? (

                                <>
                                    
                                    <TextField
                                        required
                                        name='ID Number' 
                                        variant='outlined' 
                                        label="ID Number" 
                                        value={form.dlsu_id} 
                                        onChange={(e)=>{setForm({...form ,dlsu_id: e.target.value})}}
                                        className={classes.textField}
                                        InputProps={{className: classes.input}}
                                    />
                                    
                                    <TextField
                                        required
                                        name='College' 
                                        variant='outlined' 
                                        label="College" 
                                        value={form.college} 
                                        onChange={(e)=>{setForm({...form ,college: e.target.value})}}
                                        className={classes.textField}
                                        InputProps={{className: classes.input}}
                                    />

                                    <TextField
                                        required 
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

                                {/*if user is not from dlsu or doesn't have an art pass and post is open,, render public registration field */}
                                {(!user?.result?.dlsu || user?.result?.claimed) && selPost?.status=="Open" ? (

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
                                                Register
                                        </Button>
                                    </Container>
                                    
                        
                                </>

                                ): null }
                                {/*if user is dlsu art pass holder and post is open, render register button */}
                                {selPost?.status=="Open" && (user?.result?.dlsu && !user?.result?.claimed) ? <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Register</Button>: null }
                            
                            </Container>
                            </>
                            
                            ):null }
                            {/*if user is registered to the show, render unregister button*/}
                            {(selPost?.registeredUsers?.find((e)=> e==user.result._id) || selPost?.acceptedUsers?.find((e)=> e==user.result._id)) && selPost?.status=="Open" ? (<Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Unregister</Button>) : null}
                        </Container>
                        {user?.result.admin? (<Button  variant="container" color="primary" size="large" onClick={toggleShow}>{selPost?.status=="Open"? ("Close Show"): ("Open Show")}</Button>) : null}
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