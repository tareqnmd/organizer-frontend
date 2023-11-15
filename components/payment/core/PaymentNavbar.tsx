import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';

const links = [{ path: '/payment', name: 'Payment', exact: true }];

const PaymentNavbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={links} />
		</CommonNavWrapper>
	);
};

export default PaymentNavbar;
