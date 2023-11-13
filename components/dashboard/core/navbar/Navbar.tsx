import PrimaryLogo from '@/components/ui/logo/PrimaryLogo';
import Link from 'next/link';
import DashboardLinks from './DashboardLinks';
import styles from './Navbar.module.scss';
import UserNav from './UserNav';

const Navbar = () => {
	return (
		<nav className={styles['nav-links']}>
			<div className="container">
				<Link href="/">
					<PrimaryLogo />
				</Link>
				<DashboardLinks />
				<UserNav />
			</div>
		</nav>
	);
};

export default Navbar;
