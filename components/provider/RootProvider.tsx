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
					<Toaster richColors />
					<div
						id="organizer"
						className="bg-light dark:bg-dark"
					>
						{children}
					</div>
				</StoreProvider>
			</ThemeProvider>
		</AuthProvider>
	);
};

export default RootProvider;
