import { useLogoutMutation } from '@/features/user/user-api';
import { getUserState } from '@/features/user/user-slice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import styles from './NavbarUserAction.module.scss';

const NavbarUserAction = () => {
	const user = useSelector(getUserState);
	const router = useRouter();

	const [showSubmenu, setShowSubmenu] = useState(false);

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
		<div
			onClick={() => {
				setShowSubmenu((prev) => !prev);
			}}
			className="relative inline-block text-left"
		>
			<button className={styles['menu-btn']}>
				{user?.name}
				<svg
					className="h-5 w-5 text-black"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			{showSubmenu && (
				<div className={`${styles['sub-menus']}`}>
					<Link href="/profile">
						<CgProfile />
						Profile
					</Link>
					<button onClick={logoutHandler}>
						<BiLogOut />
						Logout
					</button>
				</div>
			)}
		</div>
	);
};

export default NavbarUserAction;
