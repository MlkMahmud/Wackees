import { combineReducers } from 'redux';
import currentUser from './currentUser';
import isCustomer from './isCustomer';
import restaurants from './restaurants';
import error from './error';

export default combineReducers({
  currentUser,
  restaurants,
  error,
  isCustomer,
});
