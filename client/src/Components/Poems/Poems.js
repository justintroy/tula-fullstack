import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from "react-redux";

import Poem from './Poem/Poem'

const Poems = ({ setCurrentId }) => {
    const poems = useSelector((state) => state.poems)

    return (
        !poems.length ? <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress status="loading" /></div> : (
            <Grid container alignItems="stretch" spacing={3}>
                {poems.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((poem) => (
                    <Grid key={poem._id} item xs={12} sm={12}>
                        <Poem poem={poem} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Poems