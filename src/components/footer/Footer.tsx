import { FC } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/goods-reduser";
import { AppStateType } from "../../redux/redux-store";
import styled from './Footer.module.scss'

export const Footer: FC = () => {
	const state = useSelector((state: AppStateType): StateType => state.goodsReducer)

	// let allSum

	//const toPaySum = products.map(product => product.goods.map(goods => goods.sum > 0 ? allSum.push(goods.sum) : goods))

	// console.log(allSum);


	return (
		<div>{state.toPay || state.totalNumberOfGoods ?
			<footer className={styled.footer}>
				<p>Кол-во товара: {state.totalNumberOfGoods}шт.</p>
				<p>к оплате: {state.toPay}руб.</p>
				<button>в корзину</button>
			</footer>
			: ''}
		</div>
	)
}