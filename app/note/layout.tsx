import RootContentLayout from '@/components/core/layout/RootContentLayout';

const subMenuLinks = [
	{ path: '/note', name: 'Note', exact: true },
	{ path: '/note/create', name: 'Create' },
];

export const metadata = {
	title: 'M32T - Note',
	description: 'M32T - Note By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<RootContentLayout subMenuLinks={subMenuLinks}>
			{children}
		</RootContentLayout>
	);
}
