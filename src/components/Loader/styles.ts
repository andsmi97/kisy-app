import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    fontSize: 20,
    top: 'calc(45% - 10px)',
    left: 'calc(50% - 10px)',
  },
}));
