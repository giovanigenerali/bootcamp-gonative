import { combineReducers } from 'redux';

import { reducer as categories } from './categories';
import { reducer as products } from './products';
import { reducer as product } from './product';

export default combineReducers({
  categories,
  products,
  product,
});
