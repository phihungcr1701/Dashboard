import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DefaultLayout from './components/Layouts/DefaultLayout'
import CenterLayout from './components/Layouts/CenterLayout';
import { adminRoute, userRoute, shareRoute, publicRoute } from './routes';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
	const user = useSelector((state) => state.auth.login?.currentUser);
	const [roleRoute, setRoleRoute] = useState([]);

	useEffect(() => {
		if (user) {
			// const specificRoute = user.data.role === "admin" ? adminRoute : userRoute;
			// setRoleRoute([...specificRoute, ...shareRoute]);
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
							{renderRoutes(publicRoute)}
							<Route path="/*" element={<Navigate to="/login" />} />
						</>
					) : (
						<>
							{renderRoutes(roleRoute)}
							<Route path="/*" element={<Navigate to="/" />} />
						</>
					)}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
