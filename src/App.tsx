import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthCheck from './components/auth/AuthCheck';
import HomeRedirect from './components/auth/HomeRedirect';
import Layout from './components/layout/Layout';
import useAuthCheck from './hooks/useAuthCheck';
import AddTransaction from './pages/AddTransaction';
import Home from './pages/Home';
import Login from './pages/Login';
import TransactionList from './pages/TransactionList';

const Apps = () => {
	const authChecked = useAuthCheck();
	return (
		<>
			{!authChecked ? (
				<div className="section-center height-100">
					<CircularProgress disableShrink />
				</div>
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
								path="/transactions"
								element={
									<AuthCheck>
										<TransactionList />
									</AuthCheck>
								}
							/>
							<Route
								path="/add-transaction"
								element={
									<AuthCheck>
										<AddTransaction />
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
