import RootContentLayout from '@/components/core/layout/RootContentLayout';
import HisabLinks from '@/components/hisab/HisabLinks';

export const metadata = {
	title: 'M32T - Hisab',
	description: 'M32T - Hisab By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<HisabLinks />
			<RootContentLayout>{children}</RootContentLayout>
		</>
	);
}
