import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from './Form/Form';
import Posts from './Posts/Posts';
import useStyle from './styles'
import { getPosts } from './actions/posts'

const memoriesImg = "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyle()
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('start');
        dispatch(getPosts(dispatch))
        console.log('end');

    }, [dispatch]);
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>
                    Memories
                </Typography>
                <img src={memoriesImg} className={classes.image} alt="memories" height={"60"} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts  setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};


export default App;
