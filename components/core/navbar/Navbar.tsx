import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import NavbarUserAction from './NavbarUserAction';

const activePath = (path: string, url: string) => path === url;

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className="shadow-sm shadow-gray-300">
			<div className={styles['nav-links']}>
				<Link href="/">Hisab</Link>
				<Link
					className={
						activePath(pathname, '/transactions')
							? styles['active']
							: ''
					}
					href="/transactions"
				>
					Transactions
				</Link>
				<Link
					className={
						activePath(pathname, '/transactions/add')
							? styles['active']
							: ''
					}
					href="/transactions/add"
				>
					Add Transaction
				</Link>
				<NavbarUserAction />
			</div>
		</nav>
	);
};

export default Navbar;
