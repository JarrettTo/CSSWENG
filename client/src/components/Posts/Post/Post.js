import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Grid} from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../../actions/posts.js';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useState } from 'react';


/*@brief: renders post
* @params: post, setCurrentId
* post: post data to be rendered
* setCurrentID: useState setter
* @author: Justin To, Daniel Capinpin, Cara Alabanza, and Janielle Enrqiuez
*/
const Post = ({ post, setCurrentID }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch= useDispatch();

    const openPost = () => history.push(`/posts/${post._id}`);
    
    const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
    return(
        <Card className={classes.card}>
            
            <ButtonBase className={classes.cardAction} onClick={openPost} >
                <CardMedia component='img' height="350px" src={post.selectedFile} />

                <div className={classes.details}>
                    <Typography className={classes.tags} variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    
                </div>
                <CardContent className={classes.cardcontent}>
                    <Grid container className={classes.content} maxWidth>
                        <Grid  xs={4}  md={3} className={classes.gridDate}>
                            <Typography className={classes.month}>{moment(post.date).local().format('MMM')}</Typography>
                            <Typography className={classes.day}>{moment(post.date).local().format('DD')}</Typography>
                            <Typography className={classes.time}>{moment(post.date).local().format('HH:mm')}</Typography>
                        </Grid>

                        <Grid  xs={5}  md={8} lg={20} className={classes.gridDesc}>
                            <Typography className={classes.title} >{post.title}</Typography>
                            <Typography className={classes.venue}>{post.venue}</Typography>
                            {/* <Typography className={classes.description} noWrap>{post.description}</Typography> */}
                            {/* <Typography className={classes.endDate}>{moment(post.endDate).local().format('YYYY-MM-DD HH:mm')}</Typography> */}
                            {/* <Typography className={classes.creator}>{post.creator}</Typography> */}
                            <Typography className={classes.price}>Php {post.price}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            
            </ButtonBase>
            <div className={classes.overlay2}>
                    <Button className={classes.button3} size="medium" onClick={() => setCurrentID(post._id)}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
            </div>
            <CardActions className={classes.cardActions}>
                
                {user.result.admin && (<Button size="small" className={classes.button2} onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>)}
            </CardActions>
    
        </Card>
    );
};

export default Post;