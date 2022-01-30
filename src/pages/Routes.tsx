import React from 'react';
import { Routes, Route } from "react-router-dom";
import App from '../App';
import Error404 from './Error404';
import { SinglePage } from './SinglePage';


export const PATH = {
	APP: '/',
	SINGLE_PAGE: '/:id'
}

export const RoutesApp = () => {


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