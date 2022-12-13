import React, { useEffect } from "react";
import useStyles from './styles';

import Log from './Log';
import { useState } from "react";
import { CircularProgress, TextField, Button, Grid, Container, AppBar, Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getLogs, getAttBySearch } from "../../actions/attendance";
import { useHistory } from "react-router-dom";
/*@brief: renders all attendance logs
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
*/
const Attendance = () => {
    const logs = useSelector((state)=> state.logs);
    const classes = useStyles();    const history=useHistory();
    const [search, setSearch] = useState('');
    //const selPost=(id)=>posts.find((e)=>{ return e._id==id});
    const dispatch= useDispatch();
    useEffect(() => {
        if(!JSON.parse(localStorage.getItem("profile"))?.result.admin){         //prevent non admin users from accessing this page
            history.push('/');
        }
        dispatch(getLogs());
    },[])

    /*@brief: searchAtt
    * @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enriquez
    */
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
        <Grid container className={classes.container} alignItems="stretch" spacing={3}>
            <Container>
                <Typography className={classes.title} variant="h2">Attendance Page</Typography>
                <AppBar position="static" className={classes.appbar}>
                    <form>
                        <TextField className={classes.filter}
                                    name="search"
                                    variant="outlined"
                                    label="Search Event"
                                    onKeyPress={handleKeyPress}
                                    size="small"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button className={classes.filterButton} onClick={searchAtt}  variant='contained' >Filter</Button>
                    </form>
                
                </AppBar>
                
            </Container>
            
            {console.log(logs)}
            {!logs.length ? <CircularProgress />: (
            logs.map((log) =>(
                <Grid key={log._id} item xs={12} sm={6} md={5}>
                    <Log log={log} />
                </Grid>
            ))) }
        </Grid>
    )
}

export default Attendance;