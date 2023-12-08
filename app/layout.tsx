import RootLayoutProvider from '@/components/provider/RootLayoutProvider';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Organizer',
	description: 'Organizer By Tareq',
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
