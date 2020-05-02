import { connect } from 'react-redux';
import SignUp from './Page';
import { signUp } from '../../redux/reducers/common/actions';

const mapStateToProps = (state) => ({
  authInProgress: state.common.authInProgress,
});

const mapDispatchToProps = (dispatch) => ({
  onSignUp: ({ email, password, sex, dateOfBirth }) =>
    dispatch(signUp({ email, password, sex, dateOfBirth })),
});
const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
