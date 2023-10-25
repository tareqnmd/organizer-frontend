import RootContentLayout from '@/components/core/layout/RootContentLayout';

const subMenuLinks = [
	{ path: '/hisab', name: 'Hisab', exact: true },
	{ path: '/hisab/transactions', name: 'Transactions' },
];

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
		<RootContentLayout subMenuLinks={subMenuLinks}>
			{children}
		</RootContentLayout>
	);
}
