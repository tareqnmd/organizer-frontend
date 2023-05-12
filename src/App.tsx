import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthCheck from './components/auth/AuthCheck';
import HomeRedirect from './components/auth/HomeRedirect';
import useAuthCheck from './hooks/useAuthCheck';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/global.scss';

const Apps = () => {
	const authChecked = useAuthCheck();
	return (
		<>
			{!authChecked ? (
				<CircularProgress disableShrink />
			) : (
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<AuthCheck>
									<Home />
								</AuthCheck>
							}
						/>
						<Route
							path="/login"
							element={
								<HomeRedirect>
									<Login />
								</HomeRedirect>
							}
						/>
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
};

export default Apps;
