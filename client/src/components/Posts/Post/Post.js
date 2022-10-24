import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';
const Post = ({ post }) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={postMessage.selectedFile} title={Post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.title}</Typography>
                <Typography variant='body1'>{post.creator}</Typography>
                <Typography variant='body2'>{post.date}</Typography>

            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags}</Typography>
                
            </div>
            <CardContent>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.description}</Typography>
            <Typography className={classes.title} variant="body1" gutterBottom>{post.price}</Typography>
            </CardContent>
            
            
        </Card>
    );
};

export default Post;