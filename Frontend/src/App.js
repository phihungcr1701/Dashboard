import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { adminRoute, userRoute, shareRoute } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DefaultLayout from './components/Layouts/DefaultLayout'
import CenterLayout from './components/Layouts/CenterLayout';
import { useSelector } from 'react-redux';

function App() {
	const user = useSelector((state) => state.auth.login?.currentUser);
	const [roleRoute, setRoleRoute] = useState([]);

	useEffect(() => {
		if (user) {
			setRoleRoute(user.data.role === "admin" ? adminRoute : userRoute);
		}
	}, [user]);

	const renderRoutes = (roleRoute) => {
		return roleRoute.map((route, index) => {
			const Page = route.component;
			return (
				<Route
					key={index}
					path={route.path}
					element={
						(route.defaultLayout &&
							<DefaultLayout>
								<Page />
							</DefaultLayout>
						) || (
							<CenterLayout>
								<Page />
							</CenterLayout>
						)
					}
				/>
			);
		})
	};

	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					{!user ? (
						<>
							{renderRoutes(shareRoute)}
							<Route path="/*" element={<Navigate to="/login" />} />
						</>
					) : (
						renderRoutes(roleRoute)
					)}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
