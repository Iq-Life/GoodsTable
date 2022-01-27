
import { request } from 'http'
import { call, put, takeEvery, fork } from 'redux-saga/effects'
import { ProductsType, productsApi } from '../../API/products-API'
import { ActionType } from '../goods-reduser'


export function* fitchProducts() {

	const products: Array<ProductsType> = yield call(productsApi.getProducts)
	console.log(products);

	yield put({ type: "SET_GOODS", payload: products })
}

////////////////////////////////////////////////////////////////////////////////////

export function* workerSaga() {
	yield fork(fitchProducts)
}

export function* watchLoadDataSaga() {
	yield takeEvery('FETCH', workerSaga)
}


export default function* rootSaga() {
	yield fork(watchLoadDataSaga)
}

