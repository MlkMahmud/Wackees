import { combineReducers } from 'redux';
import currentUser from './currentUser';
import isCustomer from './isCustomer';
import restaurants from './restaurants';
import error from './error';
import restaurant from './restaurant';
import loading from './loading';
import itemToUpdate from './itemToUpdate';

export default combineReducers({
  currentUser,
  restaurants,
  error,
  isCustomer,
  restaurant,
  loading,
  itemToUpdate,
});
