'use client';
import store, { persistor } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PrevRouteStore from './PrevRouteStore';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				<PrevRouteStore />
				{children}
			</PersistGate>
		</Provider>
	);
};

export default StoreProvider;
