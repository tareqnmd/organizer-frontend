import DashboardLayout from '@/components/core/layout/DashboardLayout';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
