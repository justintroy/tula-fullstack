import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: "none",
  },
  heading: {
    fontFamily: "Playfair Display",
    textDecoration: "none",
    color: "black"
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '200px',
  },
  profile: {
    display: 'flex',
  },
  mainProfile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  logout: {
    display: 'flex',
    marginTop: '10px'
  },
  userName: {
    margin: '5px 10px'
  },
}));