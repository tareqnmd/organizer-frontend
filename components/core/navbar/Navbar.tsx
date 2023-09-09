import { useLogoutMutation } from '@/features/user/user-api';
import { getUserState } from '@/features/user/user-slice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const user = useSelector(getUserState);
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
		<nav className={styles['nav-links']}>
			<div>
				<Link href="/">Hisab</Link>
				<div>
					{user?.role === 32 && (
						<Link href="/dashboard">
							<RxDashboard />
							<span>Dashboard</span>
						</Link>
					)}
					<button onClick={logoutHandler}>
						<BiLogOut />
						<span>{user?.name}, Logout</span>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
