import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { GoodsType } from "../../../API/products-API";
import style from "./Goods.module.scss";

export const Goods: FC<ComponentGoods> = ({
	goods, sumGoodsAndAllSum
}) => {

	const dispatch = useDispatch()
	const [number, setNumber] = useState(0)

	const onFocus = (e: ChangeEvent<HTMLInputElement>) => {
		e.target.select()
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (number >= 0) {
			setNumber(+event.currentTarget.value)
			sumGoodsAndAllSum(goods.gid, +event.currentTarget.value)
		}
	}

	return (
		<main className={style.content} key={goods.gid}>
			<header className={style.headerContent}>
				<div>id товара</div>
				<div>наименование</div>
				<div>цена</div>
				<div>кол-во</div>
				<div>сумма</div>
			</header>
			<main className={style.bodyContent} >
				<div className={style.id}>{goods.gid}</div>
				<div className={style.name}>{goods.gname}</div>
				<div className={style.price}>{goods.gprice}</div>
				<div><input
					min='0'
					onFocus={onFocus}
					value={number}
					onChange={handleChange}
					type='number'
				/></div>
				<div >{goods.sum}</div>
			</main>
		</main>
	)
}
type ComponentGoods = {
	goods: GoodsType
	sumGoodsAndAllSum: (gId: string, num: number) => void
}