import { makeStyles } from '@material-ui/core/styles';
export const useComponentStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(8),
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
  title: {
    textAlign: 'center',
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: theme.spacing(8),
    color: theme.palette.primary.main,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '@media (max-width: 1260px)': {
    wrapper: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    title: {
      marginBottom: theme.spacing(4),
    },
  },
  '@media (max-width: 960px)': {
    wrapper: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    title: {
      marginBottom: theme.spacing(3),
    },
  },
  '@media (max-width: 640px)': {
    wrapper: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    title: {
      fontSize: 32,
      marginBottom: theme.spacing(2),
    },
  },
}));
