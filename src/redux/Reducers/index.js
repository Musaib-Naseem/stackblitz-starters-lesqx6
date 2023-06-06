import { combineReducers } from 'redux';
import { productReducers } from './productReducer';

const rootReducer = combineReducers({
  allProducts: productReducers,
});

export default rootReducer;
