import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Typography, Divider} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts, getPostsBySearch, getRegisteredPosts} from '../../actions/posts';
import Pagination from '../Pagination';
import ChipInput from 'material-ui-chip-input';
import TitleImage from '../../images/TitleImage.png';
import FooterLogos from '../../images/FooterLogos.png';
import SearchBar from '../SearchBar/SearchBar';
import {updateUser} from '../../actions/auth';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}


const Home = () => {
    const [currentID, setCurrentID] = useState(null);
    const classes= useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const [regPostOn, setRegPosts] = React.useState(false);
    
    
    const searchPost = () => {
        if((search.trim() || tags) && (search != '' || tags.join(',') != '')) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            dispatch(getPosts());
            history.push('/');
        }
    };

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) { //if pressed enter key
            searchPost();
        }
    };

    const handleAdd = (tag) => setTags([ ...tags, tag]);

    const handleDelete = (tagToDelete => setTags(tags.filter((tag) => tag != tagToDelete)))
    const location = useLocation();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));

    const viewRegistered = () =>{
        if(regPostOn == false){
            console.log("viewing all current registered shows");
            console.log(user.result.registeredShows.concat(user.result.acceptedShows));
            console.log("viewing localuser")
            console.log(user);
            dispatch(getRegisteredPosts(user.result.registeredShows.concat(user.result.acceptedShows)));
            history.push(`/posts/regposts`)
            setRegPosts(true);
        }
        else{
            dispatch(getPosts());
            history.push('/');
            setRegPosts(false);
        }
    };

    useEffect(() => {       //everything called here will get called after the react app is started
        if(!localStorage.getItem('profile')){
            history.push('/auth');
        }
        dispatch(updateUser(user?.result._id));
        dispatch(getPosts());   //dispatch is used to trigger an action that'll affect our state (check main index.js store variable)
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[currentID, dispatch])        //the dependency arrays, currentID and dispatch, when changed, trigger the contents of use effect
    //const posts= useSelector((state)=> state.posts);
    //console.log(posts)
    const adminPage= ()=>{
        history.push(`/admin`);
    }
    const scanQr= ()=>{
        history.push(`/scan`);
    }
    return(
        <Grow in>

                <Grid container spacing={2} className={classes.gridContainer}>

                <Grid container justifyContent="center" alignItems="stretch" spacing={2} className={classes.gridContainer}>
                    <Grid className={classes.header}>
                        <img className={classes.image} src={TitleImage} alt="memories" />
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes}>
                        <Divider className={classes.divider}></Divider>  
                        
                    </Grid>
                </Grid>
                
               
                      
                        
                        
    {/* 
                            <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                                
                                <TextField className={classes.input}
                                    name="search"
                                    variant="outlined"
                                    label="Search Event"
                                    onKeyPress={handleKeyPress}
                                    fullWidth
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <ChipInput className={classes.input}
                                    style={{ margin: '8px 0'}}
                                    value={tags}
                                    onAdd={handleAdd}
                                    onDelete={handleDelete}
                                    fullWidth
                                    label="Search Event Tag (Press Enter After Each Tag)"
                                    variant="outlined"
                                />
                                <Button onClick={searchPost} className={classes.searchButton} variant='contained' fullWidth>Filter</Button>
                            </AppBar> */}
    {/* 
                            {user?.result ? (
                                    <Paper elevation={6}>
                                    {!regPostOn && <Button onClick={viewRegistered} variant='contained'>Check Registered Posts</Button> }
                                    {regPostOn && <Button onClick={viewRegistered} variant='contained'>Check All Posts</Button> }
                                    </Paper>
                                ):(
                                    <Paper elevation={6}>
                                        <Typography variant='contained'>Log in to View Registered Posts</Typography>
                                    </Paper>
                                )}
                                <Paper elevation={6}>
                                <Pagination page={page}/>
                            </Paper> */}
                            { user?.result.admin ?(

                                // ADMIN VIEW 

                                <Grid container alignItems="stretch" spacing={3} className={classes.gridContainer} maxWidth>
                                    <Grid item  xs={12} sm={8} md={7}>
                                        <Typography className={classes.label1} variant='h3'>CAO SHOW LIST </Typography>      
                                        <Posts setCurrentID={setCurrentID}/> 
                                    </Grid>
                                    <Grid item className={classes.grid} >
                                        <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                                        
                                        <TextField className={classes.input}
                                            name="search"
                                            variant="outlined"
                                            label="Search Event"
                                            onKeyPress={handleKeyPress}
                                            fullWidth
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <ChipInput className={classes.input}
                                            style={{ margin: '8px 0'}}
                                            value={tags}
                                            onAdd={handleAdd}
                                            onDelete={handleDelete}
                                            fullWidth
                                            label="Search Event Tag (Press Enter After Each Tag)"
                                            variant="outlined"
                                        />
                                        <Button onClick={searchPost} className={classes.searchButton2} variant='contained' fullWidth>Filter</Button>
                                        { user?.result.admin ?(
                                            <Form currentID={currentID} setCurrentID={setCurrentID}/>
                                            ): null}   

                                        
                                        </AppBar>
                                        <Paper elevation={6}>
                                            <Pagination page={page}/>
                                        </Paper>
                                            
                                    </Grid>
                                </Grid>
                            ):   
                            
                            // USER VIEW 


                            <Grid container  className={classes.gridContainer1}>
                                <Typography className={classes.label2} variant='h3'>CAO SHOW LIST </Typography> 
                                {user?.result ? (
                                        <div className={classes.div}>
                                        {!regPostOn && <Button onClick={viewRegistered} className={classes.searchButton1} variant='contained' >My Registered Posts</Button> }
                                        {regPostOn && <Button onClick={viewRegistered} className={classes.searchButton1} variant='contained' >Check All Posts</Button> }
                                        </div>
                                    ):(
                                        <div className={classes.div}>
                                            <Typography variant='contained'>Log in to View Registered Posts</Typography>
                                        </div>
                                    )}        
                                <Grid item className={classes.item2} alignItems='flex-end' justifyContent='flex-end' xs={6} sm={6} md={6}>
                                <TextField className={classes.input2}
                                        name="search"
                                        variant="outlined"
                                        label="Search Event"
                                        onKeyPress={handleKeyPress}
                                        value={search}

                                        onChange={(e) => setSearch(e.target.value)}
                                        
                                    />
                                    
                                     
                                    <ChipInput className={classes.input3}
                                        value={tags}
                                        onAdd={handleAdd}
                                        onDelete={handleDelete}
                                        label="Search Tag"
                                        variant="outlined"
                                        helperText="Press enter after each tag"
                                    />
                                    <Button onClick={searchPost} className={classes.searchButton} variant='contained'>Filter</Button>
                             
                                    </Grid>
      
                                <Grid item className={classes.item} xs={10} sm={8} md={10}>
                                    <Posts setCurrentID={setCurrentID}/> 
                                </Grid>
                                <Grid item className={classes.page}>
                                            <Pagination page={page}/>
                                </Grid>

                            </Grid>
                                
                                }                   
                            
                        
                   

                    <Grid item xs={12} sm={20}>
                        <Divider className={classes.divider}></Divider>
                        <Typography className={classes.about} variant='h3'> ABOUT US </Typography>
                        <Typography className={classes.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Grid>

                    <Grid item xs={12} sm={20}>
                        <img className={classes.FooterLogos} src={FooterLogos} alt="memories" />
                    </Grid>

                    <Grid item xs={12} sm={20}>
                        <Typography className={classes.footer}> ©2022 DLSU Culture and Arts Office  |  All rights reserved.</Typography>
                    </Grid>


                    
                        {/* { user?.result.admin ?(
                            <Grid item xs={12} sm={4}>
                        <Button onClick={adminPage}>Admin Page</Button>
                        </Grid>
                        ): null} */}
                        
                        
                    
             </Grid>


        </Grow>
    )
}

export default Home