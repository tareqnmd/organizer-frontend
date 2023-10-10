import UserInfo from '@/components/profile/UserInfo';
import { useLogoutMutation } from '@/features/user/user-api';
import { getUserState } from '@/features/user/user-slice';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const user = useSelector(getUserState);
	const [modalType, setModalType] = useState('');
	const router = useRouter();
	const pathname = usePathname();

	const [logout, { isSuccess }] = useLogoutMutation();

	const logoutHandler = () => {
		logout({});
	};

	useEffect(() => {
		if (isSuccess) {
			router.push('/auth/login');
		}
	}, [isSuccess, router]);

	return (
		<>
			<UserInfo
				modalType={modalType}
				setModalType={setModalType}
			/>
			<nav className={styles['nav-links']}>
				<div>
					<Link href="/">M32T</Link>
					<div>
						{user?.role === 32 && (
							<Link
								href="/config"
								className={
									pathname.includes('/config')
										? styles['active']
										: ''
								}
							>
								<span>Admin</span>
							</Link>
						)}
						<button
							className={styles['profile-btn']}
							onClick={() => setModalType('profile')}
						>
							Profile
						</button>
						<button
							className={styles['logout-btn']}
							onClick={logoutHandler}
						>
							<span>{user?.name}, Logout</span>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
