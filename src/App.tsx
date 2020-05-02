import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { push } from 'connected-react-router';
import Loader from './components/Loader/Component';
import Snack from './components/Snack/Component';
import Router from './Router';
import { auth, createUserProfileDocument } from './firebase/utils.js';
import { connect } from 'react-redux';
import { store } from './redux/store';
import { onUserChange, closeSnack } from './redux/reducers/common/actions';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      background: theme.palette.primary.light,
      width: '100vw',
      height: '100vh',
    },
    '*': {
      margin: 0,
      padding: 0,
    },
  },
}));

const mapStateToProps = (state) => ({
  appLoaded: state.common.appLoaded,
  redirectTo: state.common.redirectTo,
  snackStatus: state.common.snackStatus,
  snackMessage: state.common.snackMessage,
  snackType: state.common.snackType,
  authState: state.common.authState,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(onUserChange(user)),
  handleCloseSnackBar: () => dispatch(closeSnack()),
});

const App = ({
  appLoaded,
  setCurrentUser,
  redirectTo,
  snackStatus,
  snackMessage,
  handleCloseSnackBar,
  snackType,
}) => {
  const classes = useStyles();
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const token = await userAuth.getIdToken();
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef === undefined) {
          setCurrentUser(userAuth);
        } else {
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
              token,
              photoURL: userAuth.photoURL,
            });
          });
        }
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  useEffect(() => {
    store.dispatch(push(redirectTo));
  }, [redirectTo]);

  return (
    <>
      <CssBaseline classes={{ '@globals': classes['@global'] }} />
      {appLoaded ? <Router /> : <Loader />}
      <Snack
        open={snackStatus}
        variant={snackType}
        message={snackMessage}
        onClose={handleCloseSnackBar}
      ></Snack>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
