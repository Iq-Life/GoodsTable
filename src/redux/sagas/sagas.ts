
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { productsApi, ProductsType } from '../../API/products-API';


export function* fitchProducts() {

	const products: Array<ProductsType> = yield call(productsApi.getProducts)

	yield put({ type: "SET_GOODS", payload: products })
}


export function* workerSaga() {
	yield fork(fitchProducts)
}


export function* watchLoadDataSaga() {
	yield takeEvery('FETCH', workerSaga)
}


export default function* rootSaga() {
	yield fork(watchLoadDataSaga)
}

