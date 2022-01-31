import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Menu } from "../components/menu/Menu";
import { Goods } from "../components/table/goods/Goods";
import { StateType, sumAC } from "../redux/goods-reduser";
import { AppStateType } from "../redux/redux-store";
import style from "./SinglePage.module.scss";



export const SinglePage: FC = () => {

	const { urlalias } = useParams()
	const state = useSelector((state: AppStateType): StateType => state.goodsReducer)
	const dispatch = useDispatch()

	const sumGoodsAndAllSum = (pId: string, gId: string, num: number) => {
		dispatch(sumAC(pId, gId, num))
	}

	const filteredProducts = state.products.filter(product => product.urlalias === urlalias)

	return (
		<div className={style.page}>
			<Menu />
			<div className={style.table}>
				<div key={filteredProducts[0].rid}>
					<h1>{filteredProducts[0].rname}</h1>
					{filteredProducts[0].goods.map(goods =>
						<Goods
							goods={goods}
							sumGoodsAndAllSum={(gId, num) => sumGoodsAndAllSum(filteredProducts[0].rid, gId, num)}
						/>
					)}
				</div>
			</div>
			<Footer />
		</div>
	)
}