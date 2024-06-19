import RootProvider from '@/components/provider/RootProvider';
import { cn } from '@/lib/utils';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const font = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: {
		template: '%s | Organizer',
		default: 'Organizer',
	},
	description: 'Organizer By Tareq',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn('antialiased', font.className)}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
