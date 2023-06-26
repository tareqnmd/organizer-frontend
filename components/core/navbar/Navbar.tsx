import { useLogoutMutation } from '@/features/user/user-api';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BiLogOut } from 'react-icons/bi';
import styles from './Navbar.module.scss';

const activePath = (path: string, url: string) => path === url;

const Navbar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [logout, { isSuccess }] = useLogoutMutation();

	const logoutHandler = () => {
		logout({});
	};

	useEffect(() => {
		if (isSuccess) {
			router.push('/login');
		}
	}, [isSuccess, router]);

	return (
		<nav className="bg-white shadow">
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
