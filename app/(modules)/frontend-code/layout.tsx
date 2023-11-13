import '@/styles/frontend-code.scss';

import FrontendCodeLayout from '@/components/frontend-code/core/FrontendCodeLayout';

export const metadata = {
	title: 'M32T - Frontend Code',
	description: 'M32T - Frontend Code',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <FrontendCodeLayout>{children}</FrontendCodeLayout>;
}
