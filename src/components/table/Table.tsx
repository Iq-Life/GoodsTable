import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsType, GoodsType } from "../../API/products-API";
import { StateType, sumAC } from "../../redux/goods-reduser";
import { AppStateType } from "../../redux/redux-store";
import style from "./Table.module.scss"


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


const Goods = (props: ComponentGoods) => {

	const dispatch = useDispatch()
	const [number, setNumber] = useState(0)

	const onFocus = (e: ChangeEvent<HTMLInputElement>) => {
		e.target.select()
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setNumber(+event.currentTarget.value)
		props.sumGoodsAndAllSum(props.goods.gid, +event.currentTarget.value)
	}

	return (
		<main className={style.content} key={props.goods.gid}>
			<header className={style.headerContent}>
				<div>id товара</div>
				<div>наименование</div>
				<div>цена</div>
				<div>кол-во</div>
				<div>сумма</div>
			</header>
			<main className={style.bodyContent} >
				<div className={style.id}>{props.goods.gid}</div>
				<div className={style.name}>{props.goods.gname}</div>
				<div className={style.price}>{props.goods.gprice}</div>
				<input

					onFocus={onFocus}
					value={number}
					onChange={handleChange}
					type='number'
				/>
				<div >{props.goods.sum}</div>
			</main>
		</main>
	)
}
type ComponentGoods = {
	goods: GoodsType
	sumGoodsAndAllSum: (gId: string, num: number) => void
}