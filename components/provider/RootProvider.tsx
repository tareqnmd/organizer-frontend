import AntdProvider from '@/components/provider/AntdProvider';
import StoreProvider from '@/components/provider/StoreProvider';
import AuthProvider from './AuthProvider';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<AntdProvider>
				<StoreProvider>
					<div id="organizer">{children}</div>
				</StoreProvider>
			</AntdProvider>
		</AuthProvider>
	);
};

export default RootProvider;
