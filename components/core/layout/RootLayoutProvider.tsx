'use client';
import store from '@/app/store';
import { Provider } from 'react-redux';
import RootPageLayout from './RootPageLayout';

const RootLayoutProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<RootPageLayout>{children}</RootPageLayout>
		</Provider>
	);
};

export default RootLayoutProvider;
