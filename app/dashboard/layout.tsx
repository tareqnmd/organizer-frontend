import DashboardRootLayout from '@/components/dashboard/DashboardRootLayout';

export const metadata = {
	title: 'Hisab',
	description: 'Dashboard - Hisab By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardRootLayout>{children}</DashboardRootLayout>;
}
