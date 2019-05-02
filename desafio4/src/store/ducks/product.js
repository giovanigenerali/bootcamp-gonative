import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/** Action Types & Creators */
const { Types, Creators } = createActions({
  loadProductRequest: ['productId'],
  loadProductSuccess: ['data'],
  loadProductFailure: null,
});

export const ProductTypes = Types;
export default Creators;

/** Initial state */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/** Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCT_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_PRODUCT_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
});
