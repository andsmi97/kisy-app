import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Profile from './Page';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default HomeContainer;
