import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Footer } from '../components/footer/Footer';
import { Menu } from '../components/menu/Menu';
import { Table } from '../components/table/Table';
import style from './App.module.scss';

const App: FC = () => {

	const dispatch = useDispatch()

	return (
		<div className={style.App} >
			<Menu />
			<Table />
			<Footer />
		</div>
	);
}

export default App;
