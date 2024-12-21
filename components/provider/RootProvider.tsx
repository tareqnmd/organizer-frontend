import StoreProvider from '@/components/provider/StoreProvider';
import { Toaster } from '@/components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';
import Footer from '../core/Footer';
import Navbar from '../core/nav/Navbar';
import AnalyticsProvider from './AnalyticsProvider';
import AuthProvider from './AuthProvider';
import RefreshSession from './RefreshSession';
import { ThemeProvider } from './ThemeProvider';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<AnalyticsProvider>
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
						<NextTopLoader
							color="#219aca"
							showSpinner={false}
							shadow="none"
						/>
						<div id="organizer">
							<Navbar />
							{children}
							<Footer />
						</div>
					</StoreProvider>
				</ThemeProvider>
			</AuthProvider>
		</AnalyticsProvider>
	);
};

export default RootProvider;
