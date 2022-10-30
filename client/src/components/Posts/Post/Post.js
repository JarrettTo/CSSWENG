import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase} from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../../actions/posts.js';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
const Post = ({ post, setCurrentID }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch= useDispatch();

    const openPost = () => history.push(`/posts/${post._id}`);

    return(
        <Card className={classes.card}>
            
            <ButtonBase className={classes.cardAction} onClick={openPost} >
                <CardMedia className={classes.media} image={postMessage.selectedFile} title={Post.title} />
                <div className={classes.overlay}>
                    <Typography variant='h6'>{post.title}</Typography>
                    <Typography variant='body1'>{post.creator}</Typography>
                    <Typography variant='body2'>{post.date}</Typography>

                </div>
                
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    
                </div>
                <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.description}</Typography>
                <Typography className={classes.title} variant="body1" gutterBottom>{post.price}</Typography>
                </CardContent>
            
            </ButtonBase>
            <div className={classes.overlay2}>
                    <Button style={{color: 'black'}} size="small" onClick={() => setCurrentID(post._id)}>
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