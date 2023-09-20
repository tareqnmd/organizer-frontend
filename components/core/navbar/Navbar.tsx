import { useLogoutMutation } from '@/features/user/user-api';
import { getUserState } from '@/features/user/user-slice';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const user = useSelector(getUserState);
	const router = useRouter();
	const pathname = usePathname();

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
		<nav className={styles['nav-links']}>
			<div>
				<Link href="/">Hisab</Link>
				<div>
					<Link
						href="/transactions"
						className={
							pathname.includes('/transactions')
								? styles['active']
								: ''
						}
					>
						<span>Transactions</span>
					</Link>
					{user?.role === 32 && (
						<Link
							href="/dashboard"
							className={
								pathname.includes('/dashboard')
									? styles['active']
									: ''
							}
						>
							<span>Dashboard</span>
						</Link>
					)}
					<button onClick={logoutHandler}>
						<span>Logout</span>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
