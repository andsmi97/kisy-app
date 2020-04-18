import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Container';
import SignIn from './pages/SignIn/Container';
import SignUp from './pages/SignUp/Container';
import Result from './pages/Result/Container';
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
          <Route
            exact
            path='/result/:id'
            component={(e) => <Result id={e.match.params.id} />}
          />
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
