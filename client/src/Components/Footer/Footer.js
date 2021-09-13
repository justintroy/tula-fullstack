import React from 'react'
import { Box, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import useStyles from './styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.main}>
            <div>
                <Typography variant="caption">Justin Troy Marilao &copy;</Typography>
            </div>
            <div>
                <a className={classes.socials} href="https://github.com/justintroy" target='_blank' rel="noreferrer"> <GitHubIcon fontSize='small' /> </a>
                <a className={classes.socials} href="https://www.linkedin.com/in/justin-troy-marilao-3a1839126/" target='_blank' rel="noreferrer"> <LinkedInIcon fontSize='small' /> </a>
            </div>
        </Box>
    )
}

export default Footer
