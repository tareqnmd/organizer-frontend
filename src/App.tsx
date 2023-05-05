import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/global.scss';

const Apps = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Apps;
