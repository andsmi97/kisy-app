import React, { useState, FC } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { authInProgress } from '../../redux/reducers/common/actions';

export interface SignInProps {
  authInProgress: any;
  onGoogleSignIn: any;
}

const SignIn: FC<SignInProps> = ({ authInProgress, onGoogleSignIn }) => {
  const classes = useStyles();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const changeEmail = (e:any) => setEmail(e.target.value);
  // const changePassword = (e:any) => setPassword(e.target.value);

  // const onSignInSubmit = async (e:any) => {
  //   e.preventDefault();
  //   onSignIn({ email, password });
  // };

  return (
    <div className={classes.background}>
      <form className={classes.container}>

    
   {/* <TextField
     id="password-inupt"
     label="Пароль"
     className={classes.textField}
     type="password"
     name="password"
     autoComplete="password"
     margin="normal"
     variant="outlined"
     value={password}
     onChange={changePassword}
   />
   <div className={classes.buttonsWrapper}>
     <Button
       component={Link}
       to={'/'}
       variant="contained"
       color="primary"
       className={classes.button}
     >
       Отмена
     </Button>
     <Button
       type="submit"
       variant="contained"
       color="primary"
       className={classes.button}
       disabled={authInProgress}
     >
       Войти
     </Button>
   </div>  */}
        <Button
          onClick={onGoogleSignIn}
          variant="contained"
          color="primary"
          disabled={authInProgress}
          className={classes.button}
        >
          Войти c помощью google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
