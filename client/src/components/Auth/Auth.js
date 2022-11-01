import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, Input } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles';


const Auth=() => {
    var isSignUp = false;
    const classes = useStyles();
    const [showPassword,setShowPassword]= useState(false);
    const handleSubmit = () =>{

    }
    const handleShowPassword = () =>{
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    const handleChange = () => {

    };
    return(
        <Container component="main" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.Avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant="h5">{isSignUp? 'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange}  half></Input>
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
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp? 'Sign Up':'Sign In'}</Button>
                </form>

            </Paper>

        </Container>
    )
}

export default Auth;