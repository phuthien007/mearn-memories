import React from 'react';
import useStyle from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { deletePost, likePost } from '../../actions/posts';
const Post = ({ post, setCurrentId }) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deletePost(post._id))
    }

    const handleLike = () => {
        dispatch(likePost(post._id))
    }



    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography style={{ marginLeft: '6px', color: 'white' }} variant='h6' >{post.creator}</Typography>
                <Typography style={{ marginLeft: '6px', color: 'white' }} variant='body2' >{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color="textSecondary">{post.tags.map((tag) => { return tag.split(",").map(i => { return <span>{`#${i} `}{console.log(i)}</span> }) })}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom>{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleLike}>
                    <ThumbUpAltIcon fontSize="small" />
                    {` Like ${post.likeCount}`}
                </Button>

                <Button size="small" color="primary" onClick={handleDelete}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
};


export default Post;
