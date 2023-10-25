import RootContentLayout from '@/components/core/layout/RootContentLayout';

export const metadata = {
	title: 'M32T - Planner',
	description: 'M32T - Planner By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <RootContentLayout>{children}</RootContentLayout>;
}
