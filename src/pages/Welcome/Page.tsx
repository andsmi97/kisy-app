import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { ReactComponent as WelcomeImage } from '../../assets/images/Welcome.svg';
import { ReactComponent as LogoImage } from '../../assets/images/Logo.svg';
const Welcome = ({ authInProgress }) => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.buttonsWrapper}>
        <div className={classes.imageWrapper}>
          <WelcomeImage className={classes.image} />
        </div>
        <div className={classes.logoWrapper}>
          <LogoImage className={classes.image} />
        </div>
        <div className={classes.lowButtonsWrapper}>
          <Button
            component={Link}
            to={'/signin'}
            variant='contained'
            color='primary'
            className={classes.button}
          >
            LOGIN
          </Button>
          <Button
            component={Link}
            to={'/signup'}
            variant='contained'
            color='primary'
            className={classes.button}
          >
            REGISTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
