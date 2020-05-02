import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    background: theme.palette.secondary.main,
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  textFieldRoot: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  selectField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  background: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  imageWrapper: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
