
import { combineReducers } from 'redux';
import { goodsReducer } from './goods-reduser';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	goodsReducer
})

export const store = createStore(
	rootReducer,
	//@ts-ignore
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
		applyMiddleware(sagaMiddleware)
	)
)

sagaMiddleware.run(rootSaga)

//types
export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore

window.store = store 