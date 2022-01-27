import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.scss';
import { Table } from './components/Table';

function App() {


	const dispatch = useDispatch()

	useEffect(() => {
		dispatch({ type: 'FETCH' })
	}, [])


	return (
		<div className={style.App}>
			<Table />
		</div>
	);
}

export default App;
