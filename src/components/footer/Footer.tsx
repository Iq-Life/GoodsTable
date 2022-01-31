import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../redux/goods-reduser";
import { AppStateType } from "../../redux/redux-store";
import styled from './Footer.module.scss'

export const Footer: FC = () => {
	const state = useSelector((state: AppStateType): StateType => state.goodsReducer)
	const dispatch = useDispatch()

	const handlClick = () => {
		// const formData = new FormData()
		// formData.append(`product[${id}]`,value)

		// dispatch({ type: 'IN_GARBAGE', formData:  })
	}



	return (
		<div>{state.toPay || state.totalNumberOfGoods ?
			<footer className={styled.footer}>
				<p>Кол-во товара: {state.totalNumberOfGoods}шт.</p>
				<p>к оплате: {state.toPay}руб.</p>
				<button onClick={handlClick}>в корзину</button>
			</footer>
			: ''}
		</div>
	)
}