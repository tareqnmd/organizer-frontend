import AuthLayout from '@/components/core/layout/AuthLayout';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AuthLayout>{children}</AuthLayout>;
}
