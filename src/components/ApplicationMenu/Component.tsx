import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { SIGN_OUT } from '../../redux/reducers/common/constants';
import Drawer from '../Drawer/Component';
import { connect } from 'react-redux';
import { openSnack } from '../../redux/reducers/common/actions';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

const mapDispatchToProps = (dispatch) => ({
  onSignOut: () => dispatch({ type: SIGN_OUT }),
  onSnackOpen: () => dispatch(openSnack({ type: 'error', message: 'test' })),
});

const ApplicationMenu = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed' color='secondary' className={classes.appBar}>
        <Toolbar>
          <Drawer />
          <Typography variant='h6'>{props.title}</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ApplicationMenu);
