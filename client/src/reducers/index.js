import { combineReducers } from 'redux';
import restaurants from './restaurants';
import error from './error';

export default combineReducers({
  restaurants,
  error,
});
