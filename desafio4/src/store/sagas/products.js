import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* loadProducts({ categoryId }) {
  try {
    const response = yield call(api.get, `category_products/${categoryId}`);
    yield put(ProductsActions.loadProductsSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.loadProductsFailure());
  }
}
