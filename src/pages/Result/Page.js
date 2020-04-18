import React from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Loader from '../../components/Loader/Component';

const Result = ({ id, isLoading }) => {
  const classes = useStyles();

  return (
    <>
      <IconButton
        aria-label='Назад'
        component={Link}
        to={'/'}
        className={classes.returnButton}
      >
        <ArrowBack />
      </IconButton>
      <div className={classes.background}>
        {isLoading && <Loader />}
        {
          !isLoading && true
          //  content goes here
        }
      </div>
    </>
  );
};

export default Result;
