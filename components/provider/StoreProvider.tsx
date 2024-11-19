'use client';
import { AuthErrorEnum } from '@/lib/helper/auth';
import store, { persistor } from '@/store';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	const { data: session } = useSession();
	useEffect(() => {
		if (session?.error === AuthErrorEnum.REFRESH_ACCESS_TOKEN_ERROR) {
			signIn();
		}
	}, [session]);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};

export default StoreProvider;
