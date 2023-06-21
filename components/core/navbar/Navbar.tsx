import { logOut } from '@/features/user/user-slice';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import styles from './Navbar.module.scss';

const activePath = (path: string, url: string) => path === url;

const Navbar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logOut());
		localStorage.removeItem('user');
		router.push('/login');
	};

	return (
		<nav className="bg-white shadow">
			<div className={styles['nav-links']}>
				<Link href="/">Hisab</Link>
				<Link
					className={
						activePath(pathname, '/transactions') ? styles['active'] : ''
					}
					href="/transactions"
				>
					Transactions
				</Link>
				<Link
					className={
						activePath(pathname, '/transactions/add') ? styles['active'] : ''
					}
					href="/transactions/add"
				>
					Add Transaction
				</Link>
				<button
					onClick={logoutHandler}
					className={styles['logout-btn']}
				>
					<BiLogOut />
					Logout
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
