import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Result from './Page';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result);

export default ResultContainer;
