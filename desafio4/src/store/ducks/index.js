import { combineReducers } from 'redux';

import { reducer as categories } from './categories';
import { reducer as products } from './products';

export default combineReducers({
  categories,
  products,
});
