import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { adminRoute } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './components/Layouts/DefaultLayout'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					{adminRoute.map((route, index) => {
						const Page = route.component;
						return (
							<Route
								key={index}
								path={route.path}
								element={
									(route.defaultLayout &&
										<Layout>
											<Page />
										</Layout>
									) || (
										<Page />
									)
								}
							/>
						);
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
