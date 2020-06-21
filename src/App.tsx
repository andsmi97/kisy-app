import React, { useEffect, FC, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch } from 'react-router-dom';
import Router from './Router';
import Loader from './components/Loader/Component';
// import agent from './agent';
import Snack, { VariantIcon } from './components/Snack/Component';
import { auth, createUserProfileDocument } from './firebase/utils';
interface AppProps {
  user: {};
  isLoading: boolean;
  snackStatus: boolean;
  snackMessage: string;
  snackType: keyof VariantIcon;
  onLoad(payload: any, token: any): void;
  handleCloseSnackBar(e: any): void;
  setCurrentUser(user:any):void;
}

const App: FC<AppProps> = ({
  user,
  isLoading,
  snackStatus,
  snackMessage,
  snackType,
  onLoad,
  setCurrentUser,
  handleCloseSnackBar,
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
  return (
    <Suspense fallback={Loader}>
      <CssBaseline />
      <Switch>{isLoading ? <Loader /> : <Router />}</Switch>
      <Snack
        open={snackStatus}
        variant={snackType}
        message={snackMessage}
        onClose={handleCloseSnackBar}
      />
    </Suspense>
  );
};

export default App;
