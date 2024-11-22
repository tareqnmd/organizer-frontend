import StoreProvider from '@/components/provider/StoreProvider';
import { Toaster } from '@/components/ui/sonner';
import AuthProvider from './AuthProvider';
import { ThemeProvider } from './ThemeProvider';
import RefreshSession from './RefreshSession';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<StoreProvider>
					<Toaster richColors />
					<RefreshSession />
					<div id="organizer">{children}</div>
				</StoreProvider>
			</ThemeProvider>
		</AuthProvider>
	);
};

export default RootProvider;
