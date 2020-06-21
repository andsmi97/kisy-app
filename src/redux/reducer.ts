import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import common from './reducers/common';
import achievments from './reducers/achievments';

export default (history: any) =>
  combineReducers({
    common,
    achievments,
    router: connectRouter(history),
  });
