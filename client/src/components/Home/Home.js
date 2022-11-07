import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts, getPostsBySearch} from '../../actions/posts';
import Pagination from '../Pagination';
import ChipInput from 'material-ui-chip-input';

function useQuery() {
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

    
const searchPost = () => {
    if(search.trim() || tags) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
        history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
        history.push('/');
    }
};

const handleKeyPress = (e) => {
    if(e.keyCode = 13) { //if pressed enter key
        searchPost();
    }
};

const handleAdd = (tag) => setTags([ ...tags, tag]);

const handleDelete = (tagToDelete => setTags(tags.filter((tag) => tag != tagToDelete)))
    return(
        <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={4} className={classes.gridContainer}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentID={setCurrentID}/>
                        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                        <TextField
                            name="search"
                            variant="outlined"
                            label="Search Event"
                            onKeyPress={handleKeyPress}
                            fullWidth
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <ChipInput 
                            style={{ margin: '8px 0'}}
                            value={tags}
                            onAdd={handleAdd}
                            onDelete={handleDelete}
                            label="Search Event Tag (Press Enter)"
                            variant="outlined"
                        />
                        <Button onClick={searchPost} className={classes.searchButton} variant='contained' color="primary">Filter</Button>
                    </AppBar>   
                        <Form currentID={currentID} setCurrentID={setCurrentID}/>
                        <Paper elevation={6}>
                            <Pagination page={page} />
                        </Paper>
                    </Grid>
                </Grid>
        </Grow>
    )
}

export default Home