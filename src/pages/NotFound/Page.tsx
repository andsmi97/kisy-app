import React from 'react';
import { ReactComponent as Image } from '../../assets/images/NotFound.svg';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

const NotFound = ({ onRedirect }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.background}>
        <h3 className={classes.title}>Uh, Page not found :(</h3>
        <Image className={classes.image} />
        <Button variant='contained' color='secondary' onClick={onRedirect}>
          Return to main page
        </Button>
      </div>
    </>
  );
};

export default NotFound;
