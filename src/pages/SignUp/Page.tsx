import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { DatePicker } from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import { ReactComponent as SignImage } from '../../assets/images/Sign.svg';
const sexes = [
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

//TODO Add Error handling
const SignUp = ({ onSignUp, authInProgress }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [sex, setSex] = useState('Female');
  const [dateOfBirth, handleDateOfBirthChange] = useState(new Date());

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeRepeatPassword = (e) => setRepeatPassword(e.target.value);
  const changeSex = (e) => setSex(e.target.value);

  const onSignUpSubmit = async (event) => {
    event.preventDefault();
    onSignUp({ email, password, sex, dateOfBirth });
  };

  return (
    <>
      <div className={classes.imageWrapper}>
        <SignImage className={classes.image} />
      </div>
      <div className={classes.background}>
        <form className={classes.container} onSubmit={onSignUpSubmit}>
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
          <TextField
            id='repeat-password-inupt'
            label='Repeat password'
            className={classes.textField}
            type='password'
            name='repeat-password'
            margin='normal'
            variant='filled'
            color='secondary'
            value={repeatPassword}
            onChange={changeRepeatPassword}
          />
          <TextField
            id='sex-textfield'
            select
            classes={{ root: classes.selectField }}
            color='secondary'
            label='Sex'
            value={sex}
            onChange={changeSex}
            variant='filled'
          >
            {sexes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <DatePicker
            autoOk
            disableFuture
            allowKeyboardControl
            className={classes.textField}
            classes={{ root: classes.textFieldRoot }}
            openTo='year'
            format='dd/MM/yyyy'
            label='Date of birth'
            views={['year', 'month', 'date']}
            color='secondary'
            inputVariant='filled'
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={authInProgress}
          >
            REGISTER
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

export default SignUp;
