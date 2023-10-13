import RootContentLayout from '@/components/core/layout/RootContentLayout';

const subMenuLinks = [
	{ path: '/notepad', name: 'Notepad', exact: true },
	{ path: '/notepad/create', name: 'Create' },
];

export const metadata = {
	title: 'M32T - Notepad',
	description: 'M32T - Notepad By Tareqnmd',
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
