'use client';
import store, { persistor } from '@/app/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLayoutCheck from './AuthLayoutCheck';

const RootLayoutProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<ToastContainer />
				<AuthLayoutCheck />
				{children}
			</PersistGate>
		</Provider>
	);
};

export default RootLayoutProvider;
