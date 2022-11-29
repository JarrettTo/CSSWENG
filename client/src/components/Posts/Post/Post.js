import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Grid} from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../../actions/posts.js';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import moment from 'moment';


const Post = ({ post, setCurrentID }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch= useDispatch();

    const openPost = () => history.push(`/posts/${post._id}`);

    return(
        <Card className={classes.card}>
            
            <ButtonBase className={classes.cardAction} onClick={openPost} >
                <CardMedia component= 'image' className={classes.media} image={postMessage.selectedFile} title={Post.title} />
                
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    
                </div>
                <CardContent className={classes.cardcontent}>
                    <Grid container className={classes.c} maxWidth>
                        <Grid  xs={4}  md={3}className={classes.gridDate}>
                            <Typography className={classes.month} maxWidth>{moment(post.date).local().format('MMM')}</Typography>
                            <Typography className={classes.day}>{moment(post.date).local().format('DD')}</Typography>
                            <Typography className={classes.time}>{moment(post.date).local().format('HH:mm')}</Typography>
                        </Grid>

                        <Grid className={classes.gridDesc}>
                            <Typography className={classes.title} >{post.title}</Typography>
                            <Typography className={classes.description}>{post.description}</Typography>
                            {/* <Typography className={classes.endDate}>{moment(post.endDate).local().format('YYYY-MM-DD HH:mm')}</Typography> */}
                            {/* <Typography className={classes.creator}>{post.creator}</Typography> */}
                            <Typography className={classes.price}>Php {post.price}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            
            </ButtonBase>
            <div className={classes.overlay2}>
                    <Button style={{color: 'white'}} size="medium" onClick={() => setCurrentID(post._id)}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
    
        </Card>
    );
};

export default Post;