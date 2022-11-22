import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles';
import  {GoogleLogin} from 'react-google-login';
import Icon from './icon';
import Input from './Input';

const Auth=() => {
    var isSignUp = false;
    const classes = useStyles();
    const [showPassword,setShowPassword]= useState(false);
    const [signUp,setSignUp]= useState(false);
    const handleSubmit = () =>{

    }
    const handleShowPassword = () =>{
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    const handleChange = () => {

    };
    const switchMode = () => {
        setSignUp((prev)=>!prev);
        setShowPassword(false);
    }
    const googleSuccess = async (res)=>{
        console.log("res");

    }
    const googleFailure =()=>{
        console.log("L");
    }
    return(
        <Container className={classes.container} component="main" >
            <Paper className={classes.paper} >
                <Avatar className={classes.Avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant="h5">{isSignUp? 'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half></Input>
                                <Input name="lastName" label="Last Name" handleChange={handleChange}  half></Input>
                                <Input name="email" label="Email" handleChange={handleChange} type="email"    half></Input>
                            </>
                        )}
                            <Input name="id" label="ID" handleChange={handleChange}  type="id" ></Input>
                            <Input name="password" label="Password" handleChange={handleChange}  type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword} ></Input>
                        {
                            isSignUp && (
                                <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange}  type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword} half></Input>  
                            )
                        }
                    </Grid>
                    
                    
                    <GoogleLogin
                        clientId='387249647738-f58tonsbl58g3n75hh3rt3mqs9bkl0r0.apps.googleusercontent.com'
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
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp? 'Sign Up':'Sign In'}</Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp? 'Already have an account? Sign In!' : 'Don\'t have an Account? Sign Up!'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>

        </Container>
    )
}

export default Auth;