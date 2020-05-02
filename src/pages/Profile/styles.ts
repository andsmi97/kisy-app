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
  root: {
    background: `${theme.palette.primary.light}!important`,
    // width: '100%',
  },
  dotActive: {
    backgroundColor: `${theme.palette.secondary.main}!important`,
  },
  positionBottom: {
    bottom: `${theme.spacing(3)}px!important`,
  },
}));
