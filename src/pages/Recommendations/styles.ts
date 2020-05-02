import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'scroll',
    padding: theme.spacing(3),
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  image: {
    width: '80%',
  },
  title: {
    textAlign: 'center',
  },
}));
