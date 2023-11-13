import DashboardLayout from '@/components/dashboard/core/DashboardLayout';
import '@/styles/dashboard.scss';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
