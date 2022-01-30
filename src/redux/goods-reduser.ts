import { ProductsType } from "../API/products-API"

const multi = (price: number, num: number) => {
	return price * num
}

const initialState: StateType = {
	products: [],
	toPay: 0,
	totalNumberOfGoods: 0
}

export const goodsReducer = (state: StateType = initialState, action: ActionType): StateType => {
	switch (action.type) {
		case "SET_GOODS": {
			return {
				...state, products: action.payload.map((product) => {
					return {
						...product, goods: product.goods.map(goods => {
							return { ...goods, sum: 0, numberOfGoods: 0 }
						})
					}
				})
			}
		}
		case "SUM_GOODS_AND_ALL_SUM": {
			return {
				...state,
				products: state.products.map(product => {
					return {
						...product,
						goods: product.goods.map(goods => {
							if (goods.gid === action.gId) {
								return {
									...goods,
									numberOfGoods: goods.numberOfGoods = action.num,
									sum: goods.sum = multi(+goods.gprice, action.num)
								}
							} else {
								return goods
							}
						})
					}
				}),
				toPay: state.toPay = state.products.map(pr => pr.goods.reduce((acc, currentValue) => {
					return acc + currentValue.sum
				}, 0)).reduce((acc, currentValue) => {
					return acc + currentValue
				}, 0),
				totalNumberOfGoods: state.totalNumberOfGoods = state.totalNumberOfGoods = state.products.map(pr => pr.goods.reduce((acc, currentValue) => {
					return acc + currentValue.numberOfGoods
				}, 0)).reduce((acc, currentValue) => {
					return acc + currentValue
				}, 0)
			}
		}
		default:
			return state
	}
}

export const setGoodsAC = (payload: Array<ProductsType>) => {
	return { type: "SET_GOODS", payload } as const
}
export const sumAC = (pId: string, gId: string, num: number) => {
	return { type: "SUM_GOODS_AND_ALL_SUM", pId, gId, num } as const
}

//types
export type ActionType = ReturnType<typeof setGoodsAC> | ReturnType<typeof sumAC>
export type StateType = {
	products: Array<ProductsType>,
	toPay: number
	totalNumberOfGoods: number
}
