import PrimaryLogo from '@/components/ui/logo/PrimaryLogo';
import Link from 'next/link';
import ModuleWiseNav from './ModuleWiseNav';
import styles from './Navbar.module.scss';
import UserNav from './UserNav';

const Navbar = () => {
	return (
		<nav className={styles['nav-links']}>
			<div className="container">
				<Link href="/">
					<PrimaryLogo />
				</Link>
				<ModuleWiseNav />
				<UserNav />
			</div>
		</nav>
	);
};

export default Navbar;
