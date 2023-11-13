import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';
import PrimaryLogo from '@/components/ui/logo/PrimaryLogo';
import Link from 'next/link';
import DashboardLinks from './DashboardLinks';
import UserNav from './UserNav';

const Navbar = () => {
	return (
		<CommonNavWrapper>
			<Link href="/">
				<PrimaryLogo />
			</Link>
			<DashboardLinks />
			<UserNav />
		</CommonNavWrapper>
	);
};

export default Navbar;
