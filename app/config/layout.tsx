import RootContentLayout from '@/components/core/layout/RootContentLayout';

const subMenuLinks = [
	{ path: '/config', name: 'Global' },
	{ path: '/config/hisab', name: 'Hisab' },
];

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
		<RootContentLayout subMenuLinks={subMenuLinks}>
			{children}
		</RootContentLayout>
	);
}
