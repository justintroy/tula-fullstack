import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
      dispatch({ type: 'LOGOUT' });

      history.push('/')

      setUser(null)
    }

    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="transparent">
          <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2">tu·lâ</Typography>
            <Typography className={classes.heading} variant="subtitle1">png. koleksyon ng wika at kaisipan.</Typography>
          </div>
          <Toolbar className={classes.toolbar}>
            {user ? (
              <div className={classes.mainProfile}>
                <div className={classes.profile}>
                  <Typography className={classes.userName} variant="subtitle">{user.result.name}</Typography>
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                </div>
                <div className={classes.logout}>
                  <Button size='small' variant="contained" color="secondary" onClick={logout}>Logout</Button>
                </div>
              </div>
            ) : (
              <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
          </Toolbar>
        </AppBar>
    )
}

export default Navbar
