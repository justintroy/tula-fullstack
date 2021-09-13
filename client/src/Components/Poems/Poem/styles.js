import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  poem: {
    margin: '20px 10px',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '12px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  cardActions: {
    padding: '20px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});