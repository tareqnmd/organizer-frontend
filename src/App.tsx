import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthCheck from './components/auth/AuthCheck';
import HomeRedirect from './components/auth/HomeRedirect';
import Layout from './components/layout/Layout';
import useAuthCheck from './hooks/useAuthCheck';
import Home from './pages/Home';
import Login from './pages/Login';

const Apps = () => {
	const authChecked = useAuthCheck();
	return (
		<>
			{!authChecked ? (
				<CircularProgress disableShrink />
			) : (
				<BrowserRouter>
					<Layout>
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
					</Layout>
				</BrowserRouter>
			)}
		</>
	);
};

export default Apps;
