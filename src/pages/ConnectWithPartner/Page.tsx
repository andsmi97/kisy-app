import React, { useState } from 'react';
import Loader from '../../components/Loader/Component';
import { useStyles } from './styles';
import ApplicationMenu from '../../components/ApplicationMenu/Component';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const ConnectWithPartner = ({ isLoading, userId, redirect, openSnack }) => {
  const classes = useStyles();
  const [partnerId, setPartnerId] = useState('');

  const changePartnerId = (e) => setPartnerId(e.target.value);

  const onSignInSubmit = async (event) => {
    event.preventDefault();
    console.log('called');
    openSnack({
      type: 'success',
      message: 'You have been successfuly connected',
    });
    redirect('/');
  };

  return (
    <>
      <ApplicationMenu title='Connect with Partner' />
      <div className={classes.background}>
        {isLoading && <Loader />}
        <Typography variant='h6'>
          Enter your partner or give him yours
        </Typography>
        <Typography variant='p' className={classes.yourId}>
          your ID: <span className={classes.bold}>{userId}</span>
        </Typography>
        <form onSubmit={onSignInSubmit} className={classes.form}>
          <TextField
            id='partnerid-input'
            label='Partner ID'
            className={classes.textField}
            type='text'
            name='parnerid'
            margin='normal'
            variant='filled'
            color='secondary'
            value={partnerId}
            onChange={changePartnerId}
          />
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            className={classes.button}
          >
            CONNECT
          </Button>
        </form>
      </div>
    </>
  );
};

export default ConnectWithPartner;
