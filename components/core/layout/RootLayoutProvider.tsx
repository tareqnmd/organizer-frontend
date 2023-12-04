'use client';
import store, { persistor } from '@/app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLayoutCheck from './AuthLayoutCheck';
import MainLayout from './MainLayout';

const RootLayoutProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<AuthLayoutCheck />
				<MainLayout>{children}</MainLayout>
			</PersistGate>
		</Provider>
	);
};

export default RootLayoutProvider;
