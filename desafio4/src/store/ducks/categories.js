import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/** Action Types & Creators */
const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
  loadCategoriesFailure: null,
  setCurrentCategory: ['id'],
});

export const CategoriesTypes = Types;
export default Creators;

/** Initial state */
export const INITIAL_STATE = Immutable({
  data: [],
  current: null,
});

/** Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { data }) => state.merge({
    data,
  }),
  [Types.SET_CURRENT_CATEGORY]: (state, { id }) => state.merge({
    current: id,
  }),
});
