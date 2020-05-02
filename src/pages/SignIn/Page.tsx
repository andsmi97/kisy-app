import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { ReactComponent as SignImage } from '../../assets/images/Sign.svg';
const SignIn = ({ onSignIn, authInProgress, onGoogleSignIn }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);

  const onSignInSubmit = async (event) => {
    event.preventDefault();
    onSignIn({ email, password });
  };

  return (
    <>
      <div className={classes.imageWrapper}>
        <SignImage className={classes.image} />
      </div>
      <div className={classes.background}>
        <form className={classes.container} onSubmit={onSignInSubmit}>
          <TextField
            id='login-input'
            label='Email'
            className={classes.textField}
            type='text'
            name='Email'
            margin='normal'
            variant='filled'
            color='secondary'
            value={email}
            onChange={changeEmail}
          />
          <TextField
            id='password-inupt'
            label='Password'
            className={classes.textField}
            type='password'
            name='password'
            margin='normal'
            variant='filled'
            color='secondary'
            value={password}
            onChange={changePassword}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={authInProgress}
          >
            LOGIN
          </Button>
          <Button
            component={Link}
            to={'/'}
            variant='contained'
            color='primary'
            className={classes.button}
          >
            CANCEL
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
