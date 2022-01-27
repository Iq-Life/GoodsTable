import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsType, GoodsType } from "../API/products-API";
import { sumAC } from "../redux/goods-reduser";
import { AppStateType } from "../redux/redux-store";
import style from "./Table.module.scss"


export const Table: FC = () => {

	const products = useSelector((state: AppStateType): ProductsType[] => state.goodsReducer)
	const dispatch = useDispatch()


	const Goods = (props: { product: GoodsType }) => {

		const dispatch = useDispatch()
		const [number, setNumber] = useState('0')

		const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			setNumber(event.currentTarget.value)

			dispatch(sumAC(props.product.gid, event.currentTarget.value))
		}

		return (
			<main className={style.content} key={props.product.gid}>
				<header className={style.headerContent}>
					<div>id</div>
					<div>product name</div>
					<div>price</div>
					<div>input</div>
					<div>sum</div>
				</header>
				<main className={style.bodyContent} >
					<div className={style.id}>{props.product.gid}</div>
					<div className={style.name}>{props.product.gname}</div>
					<div className={style.price}>{props.product.gprice}</div>
					<input
						className={style.content}
						value={number}
						onChange={handleChange}
						type='number'
					/>
					<div className={style.content}>{props.product.sum}</div>
				</main>
			</main>
		)
	}

	const productsMap = products.map((product: ProductsType) => (
		<div key={product.rid}>
			<h1>{product.rname}</h1>
			{product.goods.map(goods => <Goods product={goods} />)}

		</div>
	))

	return (
		<div className={style.table}>
			{productsMap}
		</div>
	)
}