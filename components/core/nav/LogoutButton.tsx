'use client';

import { cn, logoutHandler } from '@/lib/utils';

const LogoutButton = ({ extraClass }: { extraClass: string }) => {
	const logout = async () => {
		await logoutHandler();
	};
	return (
		<button
			className={cn('transition hover:font-semibold', extraClass)}
			onClick={logout}
		>
			Logout
		</button>
	);
};

export default LogoutButton;
