import ConfigLinks from '@/components/config/ConfigLinks';
import RootContentLayout from '@/components/core/layout/RootContentLayout';

export const metadata = {
	title: 'Hisab',
	description: 'Dashboard - Hisab By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<ConfigLinks />
			<RootContentLayout>{children}</RootContentLayout>
		</>
	);
}
