import ConfigLayout from "@/components/config/core/ConfigLayout";
import '@/styles/config.scss';

export const metadata = {
	title: 'M32T - Config',
	description: 'M32T - Config By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ConfigLayout>{children}</ConfigLayout>;
}
