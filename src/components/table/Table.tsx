import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsType } from "../../API/products-API";
import { StateType, sumAC } from "../../redux/goods-reduser";
import { AppStateType } from "../../redux/redux-store";
import { Goods } from "./goods/Goods";
import style from "./Table.module.scss";


export const Table: FC = () => {

	const state = useSelector((state: AppStateType): StateType => state.goodsReducer)
	const dispatch = useDispatch()

	const sumGoodsAndAllSum = (pId: string, gId: string, num: number) => {
		dispatch(sumAC(pId, gId, num))
	}


	const productsMap = state.products.map((product: ProductsType) => (
		<div key={product.rid}>
			<h1>{product.rname}</h1>
			{product.goods.map(goods =>
				<Goods
					goods={goods}
					sumGoodsAndAllSum={(gId, num) => sumGoodsAndAllSum(product.rid, gId, num)}
				/>
			)}

		</div>
	))

	return (
		<div className={style.table}>
			{productsMap}
		</div>
	)
}
