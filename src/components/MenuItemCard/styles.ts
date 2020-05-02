import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    width: '100%',
    margin: theme.spacing(3),
    textDecoration: 'none',
    minHeight: 250,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    // height: '100%',
  },
}));
