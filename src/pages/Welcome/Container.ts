import { connect } from 'react-redux';
import Welcome from './Page';

const mapStateToProps = (state: any) => ({
  authInProgress: state.common.authInProgress,
});

const mapDispatchToProps = (dispatch: any) => ({});
const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
