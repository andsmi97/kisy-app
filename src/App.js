import React, { useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { push } from 'connected-react-router';
import Loader from './components/Loader/Component';
import Snack from './components/Snack/Component';
import Router from './Router';
import { auth, createUserProfileDocument } from './firebase/utils.js';
import { connect } from 'react-redux';
import { store } from './redux/store';
import { onUserChange, closeSnack } from './redux/reducers/common/actions';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#F06292', light: '#FF94C2', dark: '#BA2D65' },
    secondary: { main: '#2196F3', light: '#6EC6FF', dark: '#0069C0' },
  },
});

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
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {appLoaded ? <Router /> : <Loader />}
      <Snack
        open={snackStatus}
        variant={snackType}
        message={snackMessage}
        onClose={handleCloseSnackBar}
      ></Snack>
    </MuiThemeProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
