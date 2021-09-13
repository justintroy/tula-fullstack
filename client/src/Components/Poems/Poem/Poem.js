import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create';
import moment from 'moment'
import 'moment/locale/fil';
import useStyles from './styles'
import { useDispatch } from 'react-redux'

import { deletePoem, likePoem } from '../../../actions/poems'

const Poem = ({ poem, setCurrentId }) => {
    moment.locale('fil');

    const classes = useStyles()
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
      if (poem.likes.length > 0) {
        return poem.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><FavoriteIcon fontSize="small" />&nbsp;{poem.likes.length > 2 ? `You and ${poem.likes.length - 1} others` : `${poem.likes.length}` }</>
          ) : (
            <><FavoriteBorderIcon fontSize="small" />&nbsp;{poem.likes.length}</>
          );
      }
  
      return <><FavoriteBorderIcon fontSize="small" />&nbsp;{poem.likes.length}</>
    };

    return (
        <Card className={classes.card}>
            {(user?.result?.googleId === poem?.creator || user?.result?._id === poem?.creator) && (
            <div className={classes.overlay2}>
                <Button style={{color: 'grey'}} size="small" onClick={() => setCurrentId(poem._id)}>
                    <CreateIcon fontSize="small" />
                </Button>
            </div>
            )}

            <CardContent className={classes.poem}>
                <Typography variant="body1">{poem.title}</Typography>
                <Typography variant="body2">ni {poem.name}</Typography>
                <Typography variant="caption" color="textSecondary">{moment(poem.createdAt).fromNow()}</Typography>
                <br />
                <br />
                <Typography variant="body1" style={{whiteSpace: 'pre-line'}}>{poem.body}</Typography>
                <br />
                <Typography variant="body2" color="textSecondary">{poem.tags.map((tag) => `#${tag} `)}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePoem(poem._id))}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === poem?.creator || user?.result?._id === poem?.creator) && (
                    <Button size="small" style={{color: 'grey'}} onClick={() => dispatch(deletePoem(poem._id))}>
                        <DeleteIcon fontSize="small" />
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Poem