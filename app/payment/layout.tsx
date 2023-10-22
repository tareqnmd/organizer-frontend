import RootContentLayout from '@/components/core/layout/RootContentLayout';

export const metadata = {
	title: 'M32T - Payment',
	description: 'M32T - Payment By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <RootContentLayout>{children}</RootContentLayout>;
}
