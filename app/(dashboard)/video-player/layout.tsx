import RootContentLayout from '@/components/core/layout/RootContentLayout';

export const metadata = {
	title: 'M32T - Video Player',
	description: 'M32T - Video Player By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <RootContentLayout>{children}</RootContentLayout>;
}
