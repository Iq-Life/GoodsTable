import { FC, useState } from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { StateType } from "../../redux/goods-reduser";
import { AppStateType } from "../../redux/redux-store";
import style from './Menu.module.scss'




export const Menu: FC<MenuType> = ({
	active, setActive
}) => {

	const state = useSelector((state: AppStateType): StateType => state.goodsReducer)

	const mapNameProducts = state.products.map(product => {
		return (
			<li>
				<NavLink key={product.rid} to={`/${product.rid}`} className={style.menuLink}>{product.rname}</NavLink>
			</li>
		)
	})



	return (
		<div
			className={active ? `${style.menuActive} ${style.menu}` : style.menu}
			onClick={() => setActive(!active)}
		>

			<span className={style.menuLines}></span>

			<nav className={style.menuNav}>
				<h1><NavLink to='/' className={style.menuNavTitle}>Все продукты</NavLink></h1>
				<ul>
					{mapNameProducts}
				</ul>
			</nav>

			<div className={style.menuOverlay}></div>

		</div>
	);
}

type MenuType = {
	active: boolean
	setActive: (value: boolean) => void
}