'use client';
import store from '@/app/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootPageLayout from './RootPageLayout';

const RootLayoutProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<ToastContainer />
			<RootPageLayout>{children}</RootPageLayout>
		</Provider>
	);
};

export default RootLayoutProvider;
