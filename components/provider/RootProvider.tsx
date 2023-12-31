import StoreProvider from '@/components/provider/StoreProvider';
import { Toaster } from '@/components/ui/sonner';
import AuthProvider from './AuthProvider';
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
					<div id="organizer">{children}</div>
					<Toaster />
				</StoreProvider>
			</ThemeProvider>
		</AuthProvider>
	);
};

export default RootProvider;
