import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './App.module.scss';
import { Footer } from './components/footer/Footer';
import { Menu } from './components/menu/Menu';
import { Table } from './components/table/Table';

const App: FC = () => {

	const dispatch = useDispatch()
	const [menuActive, setMenuActive] = useState(false)

	useEffect(() => {
		dispatch({ type: 'FETCH' })
	}, [])


	return (
		<div className={style.App} >
			<Menu active={menuActive} setActive={setMenuActive} />
			<Table />
			<Footer />
		</div>
	);
}

export default App;
