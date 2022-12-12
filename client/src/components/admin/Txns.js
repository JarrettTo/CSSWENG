import React, { useEffect } from "react";
import FileBase from 'react-file-base64';

import { useState } from "react";
import { Container, AppBar, Paper, Typography, CircularProgress, Divider, TextField, Button, Grid} from '@material-ui/core';
import Txn from "./Txn.js";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, getPosts, registerPost } from "../../actions/posts";




import { getTxns, getTxnsBySearch} from "../../actions/transactions";
function useQuery(){
    return new URLSearchParams(useLocation().search);
}

/*@brief: Rendering of Txns
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enrqiuez
*/

import useStyles from './styles';


const Admin = () => {
    const classes = useStyles();
    const txns = useSelector((state)=> state.txns);
    const {posts} = useSelector((state)=>state.posts);
    const selPost=(id)=>posts.find((e)=>{ return e._id==id});
    const dispatch= useDispatch();

    const query = useQuery();
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const history = useHistory();
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("profile"))?.result.admin){
            history.push('/');
        }
        dispatch(getTxns());
        dispatch(getPosts());
    },[])


    /*@brief: handling of error
    * @params: error
    * error: error found
    * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enrqiuez
    */
    const searchTxn  = () => {
        if((search.trim()) && (search != '')) {
            console.log("searching");
            console.log({search});
            dispatch(getTxnsBySearch({ search }));
            //dispatch(getTxnsBySearch({ search }));
            history.push(`/transactions/txnsrch?txnsrchquery=${search || 'none'}`);
        } else {
            dispatch(getTxns());
            
        }
    };
    /*@brief: handling of error
    * @params: error
    * error: error found
    * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
    */
    const handleKeyPress = (e) => {
        if(e.keyCode === 13) { //if pressed enter key
            searchTxn();
        }
    };
    return(
        
        <Grid container className={classes.container} alignItems="stretch" spacing={3}>
            <Container>
                <AppBar position="static" className={classes.appbar} >
                    <form>
                        <TextField className={classes.filter}
                                    name="search"
                                    variant="outlined"
                                    label="Search Event"
                                    onKeyPress={handleKeyPress}
                                    fullWidth
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button onClick={searchTxn}  variant='contained' fullWidth>Filter</Button>
                    </form>
                
                </AppBar>
            </Container>
            {console.log(txns)};
            {!txns.length ? <CircularProgress />: (
            txns.map((txn) => (
                <Grid key={txn._id} item xs={12} sm={6} md={5}>
                    <Txn txn={txn} post={selPost} />
                </Grid>
            ))) }
        </Grid>
    )
}

export default Admin;