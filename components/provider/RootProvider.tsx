import AntdProvider from '@/components/provider/AntdProvider';
import StoreProvider from '@/components/provider/StoreProvider';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<AntdProvider>
			<StoreProvider>
				<div id="organizer">{children}</div>
			</StoreProvider>
		</AntdProvider>
	);
};

export default RootProvider;
