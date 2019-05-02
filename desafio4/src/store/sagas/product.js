import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductActions from '~/store/ducks/product';

export function* loadProduct({ productId }) {
  try {
    const response = yield call(api.get, `products/${productId}`);
    yield put(ProductActions.loadProductSuccess(response.data));
  } catch (err) {
    yield put(ProductActions.loadProductFailure());
  }
}
