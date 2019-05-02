import { all, takeLatest } from 'redux-saga/effects';

import { CategoriesTypes } from '~/store/ducks/categories';
import { ProductsTypes } from '~/store/ducks/products';
import { ProductTypes } from '~/store/ducks/product';

import { loadCategories, setCurrentCategory } from './categories';
import { loadProducts } from './products';
import { loadProduct } from './product';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(CategoriesTypes.SET_CURRENT_CATEGORY, setCurrentCategory),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(ProductTypes.LOAD_PRODUCT_REQUEST, loadProduct),
  ]);
}
