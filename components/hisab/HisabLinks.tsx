import Submenu from '../core/navbar/Submenu';
const links = [
	{ path: '/hisab', name: 'Hisab', exact: true },
	{ path: '/hisab/transactions', name: 'Transactions' },
];

const HisabLinks = () => {
	return <Submenu links={links} />;
};

export default HisabLinks;
