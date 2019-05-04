import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/** Action Types & Creators */
const { Types, Creators } = createActions({
  addCart: ['product'],
  updateProduct: ['id', 'quantity'],
  removeProduct: ['id'],
});

export const CartTypes = Types;
export default Creators;

/** Initial state */
export const INITIAL_STATE = Immutable({
  data: [],
});

/** Reducer */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CART]: (state, { product }) => {
    let products = state.data.map((_item) => {
      const item = Object.assign({}, _item);
      if (item.id === product.id) {
        item.quantity += product.quantity;
        return item;
      }
      return item;
    });

    const it = state.data.filter(item => item.id === product.id);
    if (it.length === 0) {
      products = [...products, product];
    }

    return state.merge({
      data: products,
    });
  },

  [Types.UPDATE_PRODUCT]: (state, { id, quantity }) => {
    if (quantity < 1) {
      return state.merge({
        data: [...state.data],
      });
    }
    const products = state.data.map((_item) => {
      const item = Object.assign({}, _item);
      if (item.id === id) {
        item.quantity = quantity;
        return item;
      }
      return item;
    });

    return state.merge({
      data: products,
    });
  },

  [Types.REMOVE_PRODUCT]: (state, { id }) => state.merge({
    data: state.data.filter(product => product.id !== id),
  }),
});
