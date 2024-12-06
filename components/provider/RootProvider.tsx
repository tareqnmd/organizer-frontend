import StoreProvider from '@/components/provider/StoreProvider';
import { Toaster } from '@/components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from './AuthProvider';
import RefreshSession from './RefreshSession';
import { ThemeProvider } from './ThemeProvider';

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
					<NextTopLoader color="#01415B" showSpinner={false} />
					<div id="organizer">{children}</div>
				</StoreProvider>
			</ThemeProvider>
		</AuthProvider>
	);
};

export default RootProvider;
