import DashboardLayout from '@/components/dashboard/core/DashboardLayout';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
