import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Container';
import SignIn from './pages/SignIn/Container';
import SignUp from './pages/SignUp/Container';
import Profile from './pages/Profile/Container';
import Recommendations from './pages/Recommendations/Container';
import ConnectWithPartner from './pages/ConnectWithPartner/Container';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';
import NotFound from './pages/NotFound/Container';
import Welcome from './pages/Welcome/Container';
const mapStateToProps = (state) => ({
  currentUser: state.common.currentUser,
});

const Router = ({ currentUser }) => {
  if (currentUser) {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/profile' render={() => <Profile />} />
          <Route
            exact
            path='/recommendations'
            render={() => <Recommendations />}
          />
          <Route exact path='/connect' render={() => <ConnectWithPartner />} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    );
  }
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' render={() => <Welcome />} />
        <Route exact path='/signin' render={() => <SignIn />} />
        <Route exact path='/signup' render={() => <SignUp />} />

        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

export default connect(mapStateToProps)(Router);
