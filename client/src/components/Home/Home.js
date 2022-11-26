import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Button} from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {getPosts} from '../../actions/posts';
const Home = () => {
    const [currentID, setCurrentID] = useState(null);
    const classes= useStyles();
    const dispatch = useDispatch();
    const history=useHistory();
    const location = useLocation();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {       //everything called here will get called after the react app is started
        dispatch(getPosts());   //dispatch is used to trigger an action that'll affect our state (check main index.js store variable)
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[currentID, dispatch])        //the dependency arrays, currentID and dispatch, when changed, trigger the contents of use effect
    //const posts= useSelector((state)=> state.posts);
    //console.log(posts)
    const adminPage= ()=>{
        history.push(`/admin`);
    }
    return(
        <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentID={setCurrentID}/>
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        { user?.result.admin ?(
                        <Form currentID={currentID} setCurrentID={setCurrentID}/>
                        ): null}
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        { user?.result.admin ?(
                        <Button onClick={adminPage}>Admin Page</Button>
                        ): null}
                        
                    </Grid>
                </Grid>
        </Grow>
    )
}

export default Home