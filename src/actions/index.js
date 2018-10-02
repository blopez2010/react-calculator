import { combineReducers } from 'redux';
import { expressionReducer } from './expression';
import { historyReducer, showHistoryReducer } from './history';

export default combineReducers({
  curExpression: expressionReducer,
  showHistory: showHistoryReducer,
  history: historyReducer,
});
