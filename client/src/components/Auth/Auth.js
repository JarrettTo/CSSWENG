import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import  {GoogleLogin} from '@react-oauth/google';
import {GoogleOAuthProvider} from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import Icon from './icon';
import Input from './Input';
import jwt_decode from "jwt-decode";
import {signIn, signUpFunc, googleSign} from "../../actions/auth";
const initialState = { firstName: '', lastName: '', email: '', id: '', password: '', confirmPassword: '' };
const Auth=() => {
    
    const classes = useStyles();
    const [form, setForm] = useState(initialState);
    const [showPassword,setShowPassword]= useState(false);
    const [signUp,setSignUp]= useState(false);
    const dispatch = useDispatch();
    const history= useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        console.log(form);
        if(signUp){
            dispatch(signUpFunc(form,history));
        }else{
            dispatch(signIn(form,history));
        }   
    }
    const handleShowPassword = () =>{
        setShowPassword((prevShowPassword) => !prevShowPassword);
        
    }
    const handleChange = (e) => {
        setForm({... form, [e.target.name]: e.target.value});
    };
    const switchMode = () => {
        setSignUp((prev)=>!prev);
        setShowPassword(false);
    }
    const googleSuccess = async (res)=>{
        console.log(res);
        const result=jwt_decode(res.credential)
        const tokenID= res?.credential;
        console.log("result:", result);
        console.log("token:", tokenID);
        const googleForm={ firstName: result.given_name, lastName: result.family_name, email: result.email, id: result.email, password: '', confirmPassword: '' };
        
        try{
            dispatch(googleSign(googleForm,tokenID,history));
                           //redirects us to the homepage
        } catch(error){
            console.log("error");
        }
    }
    const googleFailure =(error)=>{
        console.log(error);
    }
    return(
        <Container component="main" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.Avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant="h5">{signUp? 'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} className={classes.input}>
                        {
                            signUp? (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half></Input>
                                <Input name="lastName" label="Last Name" handleChange={handleChange}  half></Input>
                                
                                <Input name="id" label="ID" handleChange={handleChange}  type="id" ></Input>
                            </>
                        ) : null}
                            <Input name="email" label="Email" handleChange={handleChange} type="email"    fullWidth></Input>
                            <Input name="password" label="Password" handleChange={handleChange}  type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword} ></Input>
                        {
                            signUp? (
                                <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange}  type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword} fullWidth></Input>  
                            ) : null
                        }
                    </Grid>
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{signUp? 'Sign Up':'Sign In'}</Button>
                <Typography> If you have a DLSU Account, please sign in with Google:</Typography>
                    <GoogleOAuthProvider clientId='387249647738-f58tonsbl58g3n75hh3rt3mqs9bkl0r0.apps.googleusercontent.com'>
                        <GoogleLogin

                            render={(renderProps)=>(
                                <Button 
                                    className={classes.googleButton} 
                                    color='primary' 
                                    fullWidth 
                                    onClick={renderProps.onClick} 
                                    disabled = { renderProps.disabled} 
                                    startIcon={<Icon/>} 
                                    variant="contained">

                                Google Sign In</Button>
                                )

                            }
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                    </GoogleOAuthProvider>
                    
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { signUp? 'Already have an account? Sign In!' : 'Don\'t have an Account? Sign Up!'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>

        </Container>
    )
}

export default Auth;