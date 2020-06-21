import { connect } from 'react-redux';
import { signOut } from '../../../redux/reducers/common/actions';
import Drawer from './Component';
import { changeDrawerStatus } from '../../../redux/reducers/common/actions';

const mapStateToProps = (state: any) => ({
  status: state.common.drawerStatus,
});

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(signOut()),
  changeDrawerStatus: (status: boolean) => dispatch(changeDrawerStatus(status)),
});

const DrawerContainer = connect(mapStateToProps, mapDispatchToProps)(Drawer);

export default DrawerContainer;
