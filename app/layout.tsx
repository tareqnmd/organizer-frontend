import RootLayoutProvider from '@/components/core/layout/RootLayoutProvider';
import '@/styles/global.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'M32T',
	description: 'M32T By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<RootLayoutProvider>{children}</RootLayoutProvider>
			</body>
		</html>
	);
}
