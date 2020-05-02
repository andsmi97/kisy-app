import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    background: theme.palette.secondary.main,
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  buttonsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  background: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  logoWrapper: {
    margin: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
