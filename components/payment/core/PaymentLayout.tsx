import PaymentFooter from './PaymentFooter';
import PaymentNavbar from './PaymentNavbar';

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="payment">
			<PaymentNavbar />
			<main>{children}</main>
			<PaymentFooter />
		</div>
	);
};

export default PaymentLayout;
