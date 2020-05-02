import { connect } from 'react-redux';
import ConnectWithPartner from './Page';
import * as actions from '../../redux/reducers/common/actions';
const mapStateToProps = (state) => ({
  userId: '123',
});

const mapDispatchToProps = (dispatch) => ({
  connectWithPartner: () => dispatch(actions.connectWithPartner),
  openSnack: ({ type, message }) =>
    dispatch(actions.openSnack({ type: 'success', message })),
  redirect: (to) => dispatch(actions.redirect(to)),
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectWithPartner);

export default HomeContainer;
