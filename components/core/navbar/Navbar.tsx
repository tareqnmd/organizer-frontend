import UserInfo from '@/components/profile/UserInfo';
import PrimaryLogo from '@/components/ui/logo/PrimaryLogo';
import { useLogoutMutation } from '@/features/user/api';
import { getUserState } from '@/features/user/slice';
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
			router.push('/login');
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
					<Link href="/">
						<PrimaryLogo />
					</Link>
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
								<span>Config</span>
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
