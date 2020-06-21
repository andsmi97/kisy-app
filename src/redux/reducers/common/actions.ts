import {
  APP_LOAD,
  SIGN_OUT,
  AUTH_IN_PROGRESS,
  REDIRECT,
  CHANGE_DRAWER_STATUS,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  SET_CURRENT_USER,
} from './constants';
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from '../../../firebase/utils';

export const onUserChange = (user: any) => (dispatch: any) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  });
  dispatch(loadApp());
};

export const changeDrawerStatus = (status: boolean) => ({
  type: CHANGE_DRAWER_STATUS,
  payload: status,
});

export const loadApp = () => ({
  type: APP_LOAD,
});

export const signOut = () => async (dispatch: any) => {
  await auth.signOut();
  dispatch({ type: SIGN_OUT });
};

export const signIn = ({ email, password }: any) => async (dispatch: any) => {
  dispatch(authInProgress(true));
  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch(redirect('/'));
    dispatch(authInProgress(false));
  } catch (e) {
    dispatch(authInProgress(false));
  }
  return {};
};

export const signUp = ({ email, password, sex, dateOfBirth }: any) => async (
  dispatch: any,
) => {
  dispatch(authInProgress(true));
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    console.log('dispatch', sex, dateOfBirth);
    await createUserProfileDocument(user, { sex, dateOfBirth });
    await auth.signInWithEmailAndPassword(email, password);
    dispatch(redirect('/'));
    dispatch(authInProgress(false));
  } catch (e) {
    dispatch(authInProgress(false));
  }
  return {};
};
export const authInProgress = (status: boolean) => ({
  type: AUTH_IN_PROGRESS,
  authInProgress: status,
});

export const redirect = (redirectTo: string) => ({
  type: REDIRECT,
  redirectTo,
});

export const onGoogleSignIn = () => async (dispatch: any) => {
  dispatch(authInProgress(true));
  try {
    await signInWithGoogle();
    dispatch(redirect('/'));
    dispatch(authInProgress(false));
  } catch (e) {
    dispatch(authInProgress(false));
  }
};

export const openSnack = ({
  type,
  message,
}: {
  type: string;
  message: string;
}) => ({
  type: OPEN_SNACKBAR,
  payload: { type, message },
});

export const closeSnack = () => ({ type: CLOSE_SNACKBAR });
