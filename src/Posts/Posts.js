import React from 'react';
import useStyle from './styles'
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
const Posts = ({setCurrentId}) => {
    const getPosts = useSelector((state) => state.posts)
    const classes = useStyle()


    return (
        !getPosts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing="3">
                {getPosts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};


export default Posts;
