import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  global: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    width: '100vw',
    height: '100vh',
    background: theme.palette.primary.light,
  },
}));
