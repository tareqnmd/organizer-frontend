import RootContentLayout from '@/components/core/layout/RootContentLayout';

export const metadata = {
	title: 'M32T - Note',
	description: 'M32T - Note By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <RootContentLayout>{children}</RootContentLayout>;
}
