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
  button: {
    margin: theme.spacing(1),
    background: theme.palette.secondary.main,
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  yourId: {
    textAlign: 'left',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'cetner',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
