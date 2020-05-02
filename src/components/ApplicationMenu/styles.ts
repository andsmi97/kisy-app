import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));
