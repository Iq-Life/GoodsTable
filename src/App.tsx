import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from './App.module.scss';
import { Footer } from './components/footer/Footer';
import { Table } from './components/table/Table';

const App: FC = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch({ type: 'FETCH' })
	}, [])

	return (
		<div className={style.App}>
			<Table />
			<Footer />
		</div>
	);
}

export default App;
