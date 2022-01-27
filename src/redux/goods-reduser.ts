import { getActiveElement } from "@testing-library/user-event/dist/utils"
import { ProductsType, productsApi, GoodsType } from "../API/products-API"
import { AppStateType } from "./redux-store"


const initialState: Array<ProductsType> = []

export const goodsReducer = (state = initialState, action: ActionType): Array<ProductsType> => {
	switch (action.type) {
		case "SET_GOODS": {
			return action.payload.map((product) => {
				return {
					...product, goods: product.goods.map(goods => {
						return { ...goods, sum: 0 }
					})
				}
			})
		}
		case "SUM": {
			return state.map((product) => {
				return {
					...product, goods: product.goods.filter(goods =>
						goods.gid === action.id ?
							goods.sum = +goods.gprice * +action.num
							: goods)
				}
			})
		}
		default:
			return state
	}
}

export const setGoodsAC = (payload: Array<ProductsType>) => {
	return { type: "SET_GOODS", payload } as const
}
export const sumAC = (id: string, num: string) => {
	return { type: "SUM", id, num } as const
}

//types
export type ActionType = ReturnType<typeof setGoodsAC> | ReturnType<typeof sumAC>