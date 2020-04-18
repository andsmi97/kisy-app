import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './Page';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
