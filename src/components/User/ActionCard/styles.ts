import { makeStyles } from '@material-ui/core/styles';
export const useComponentStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    borderRadius: 500,
    minHeight: 150,
    width: '100%',
    border: '2px solid black',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  imageWrapper: {
    position: 'relative',
    minWidth: 150,
    width: 150,
    maxWidth: 150,
    overflow: 'hidden',
    borderRadius: 500,
  },
  image: { width: 150, height: 150, overflow: 'hidden', objectFit: 'cover' },
  '@media (max-width: 1260px)': {},
  '@media (max-width: 960px)': {},
  '@media (max-width: 640px)': {},
}));
