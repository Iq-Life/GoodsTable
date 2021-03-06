import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import App from './App';
import Error404 from './Error404';
import { SinglePage } from './SinglePage';


export const PATH = {
	APP: '/',
	SINGLE_PAGE: '/:urlalias'
}

export const RoutesApp = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch({ type: 'FETCH' })
	}, [])

	return (
		<div>
			<Routes>
				<Route path={PATH.APP} element={<App />} />
				<Route path={PATH.SINGLE_PAGE} element={<SinglePage />} />

				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	)
} 