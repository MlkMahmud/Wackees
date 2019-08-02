import { combineReducers } from 'redux';
import currentUser from './currentUser';
import isCustomer from './isCustomer';
import restaurants from './restaurants';
import error from './error';
import filter from './filter';

export default combineReducers({
  currentUser,
  restaurants,
  filter,
  error,
  isCustomer,
});
