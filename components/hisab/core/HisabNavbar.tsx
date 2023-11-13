import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';
import PrimaryLogo from '@/components/ui/logo/PrimaryLogo';
import Link from 'next/link';

const links = [
	{ path: '/hisab', name: 'Hisab', exact: true },
	{ path: '/hisab/transactions', name: 'Transactions' },
	{ path: '/hisab/types', name: 'Types' },
];

const HisabNavbar = () => {
	return (
		<CommonNavWrapper>
			<Link href="/">
				<PrimaryLogo />
			</Link>
			{links?.map((link) => (
				<Link
					key={link.path}
					href={link.path}
				>
					{link.name}
				</Link>
			))}
		</CommonNavWrapper>
	);
};

export default HisabNavbar;
