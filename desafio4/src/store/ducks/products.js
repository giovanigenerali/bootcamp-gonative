import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/** Action Types & Creators */
const { Types, Creators } = createActions({
  loadProductsRequest: ['categoryId'],
  loadProductsSuccess: ['data'],
  loadProductsFailure: null,
});

export const ProductsTypes = Types;
export default Creators;

/** Initial state */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/** Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
});
