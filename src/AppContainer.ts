import { connect } from 'react-redux';
import App from './App';
import { AppStateType } from './redux/store';
import {
  closeSnack,
  loadApp,
  onUserChange,
} from './redux/reducers/common/actions';

const mapStateToProps = (state: AppStateType) => ({
  user: state.common.currentUser,
  isLoading: state.common.isLoading,
  snackStatus: state.common.snackStatus,
  snackMessage: state.common.snackMessage,
  snackType: state.common.snackType,
});

const mapDispatchToProps = (dispatch: any) => ({
  onLoad: () => dispatch(loadApp()),
  handleCloseSnackBar: () => dispatch(closeSnack()),
  setCurrentUser: (user: any) => dispatch(onUserChange(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
