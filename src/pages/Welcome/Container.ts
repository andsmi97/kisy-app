import { connect } from 'react-redux';
import Welcome from './Page';

const mapStateToProps = (state) => ({
  authInProgress: state.common.authInProgress,
});

const mapDispatchToProps = (dispatch) => ({});
const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
