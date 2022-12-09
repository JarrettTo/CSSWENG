import React, { useEffect } from "react";
import FileBase from 'react-file-base64';
import Log from './Log';
import { useState } from "react";
import { Paper, Typography, CircularProgress, Divider, TextField, Button, Grid, Container, AppBar} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getLogs, getAttBySearch } from "../../actions/attendance";
import { useHistory } from "react-router-dom";
import useStyles from './styles';

const Attendance = () => {
    const logs = useSelector((state)=> state.logs);
    const classes = useStyles();    const history=useHistory();
    const [search, setSearch] = useState('');
    //const selPost=(id)=>posts.find((e)=>{ return e._id==id});
    const dispatch= useDispatch();
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("profile"))?.result.admin){
            history.push('/');
        }
        dispatch(getLogs());
    },[])

    const searchAtt  = () => {
        if((search.trim()) && (search != '')) {
            console.log("searching");
            console.log({search});
            dispatch(getAttBySearch({ search }));
            //dispatch(getTxnsBySearch({ search }));
            history.push(`/attendance/attsrch?attsrchquery=${search || 'none'}`);
        } else {
            dispatch(getLogs());
            
        }
    };
    const handleKeyPress = (e) => {
        if(e.keyCode === 13) { //if pressed enter key
            getLogs();
        }
    };
    return(
        <Grid container alignItems="stretch" spacing={3}>
            <Container>
                <AppBar position="static">
                    <form>
                        <TextField 
                                    name="search"
                                    variant="outlined"
                                    label="Search Event"
                                    onKeyPress={handleKeyPress}
                                    fullWidth
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button onClick={searchAtt}  variant='contained' fullWidth>Filter</Button>
                    </form>
                
                </AppBar>
            </Container>
            {console.log(logs)};
            {!logs.length ? <CircularProgress />: (
            logs.map((log) => (
                <Grid key={log._id} item xs={12} sm={6}>
                    <Log log={log} />
                </Grid>
            ))) }
        </Grid>
    )
}

export default Attendance;