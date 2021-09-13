import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux'
import { getPoems } from '../../actions/poems'

import Poems from '../Poems/Poems.js'
import Form from '../Form/Form.js'
import useStyles from './styles'

const Home = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch()
    const classes = useStyles()
  
    useEffect(() => {
      dispatch(getPoems());
    }, [currentId, dispatch])

    return (
    <Grow in>
        <Container>
            <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} md={7}>
                    <Poems setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
}

export default Home
