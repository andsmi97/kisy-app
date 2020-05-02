import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  selectField: {
    width: '100%',
  },
  question: {
    marginBottom: theme.spacing(1),
  },
}));
