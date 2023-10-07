import ConfigLinks from '@/components/config/ConfigLinks';
import RootContentLayout from '@/components/core/layout/RootContentLayout';

export const metadata = {
	title: 'M32T - Config',
	description: 'M32T - Config By Tareqnmd',
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
