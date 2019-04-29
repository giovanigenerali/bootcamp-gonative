import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';
import ProductsActions from '~/store/ducks/products';

export function* loadCategories() {
  try {
    const response = yield call(api.get, 'categories');
    yield put(CategoriesActions.loadCategoriesSuccess(response.data));
    yield put(ProductsActions.loadProductsRequest(response.data[0].id));
  } catch (err) {
    yield put(CategoriesActions.loadCategoriesFailure());
  }
}

export function* setCurrentCategory({ id }) {
  yield put(ProductsActions.loadProductsRequest(id));
}
