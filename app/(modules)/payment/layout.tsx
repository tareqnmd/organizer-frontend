import PaymentLayout from '@/components/payment/core/PaymentLayout';
import '@/styles/payment.scss';

export const metadata = {
	title: 'M32T - Payment',
	description: 'M32T - Payment By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <PaymentLayout>{children}</PaymentLayout>;
}
