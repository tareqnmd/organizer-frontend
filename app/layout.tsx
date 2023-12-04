import RootLayoutProvider from '@/components/core/layout/RootLayoutProvider';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
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
				<StyledComponentsRegistry>
					<RootLayoutProvider>{children}</RootLayoutProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
