import HisabLayout from '@/components/hisab/core/HisabLayout';
import '@/styles/hisab.scss';

export const metadata = {
	title: 'M32T - Hisab',
	description: 'M32T - Hisab By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <HisabLayout>{children}</HisabLayout>;
}
