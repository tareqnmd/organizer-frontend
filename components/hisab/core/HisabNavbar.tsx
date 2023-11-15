import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';

const links = [
	{ path: '/hisab', name: 'Hisab', exact: true },
	{ path: '/hisab/transactions', name: 'Transactions' },
	{ path: '/hisab/types', name: 'Types' },
];

const HisabNavbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={links} />
		</CommonNavWrapper>
	);
};

export default HisabNavbar;
