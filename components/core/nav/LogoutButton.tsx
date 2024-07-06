'use client';

import { logoutHandler } from '@/lib/helper/auth';
import { cn } from '@/lib/utils';

const LogoutButton = ({ extraClass }: { extraClass: string }) => {
	const logout = async () => {
		await logoutHandler();
	};
	return (
		<button
			className={cn('transition hover:underline', extraClass)}
			onClick={logout}
		>
			Logout
		</button>
	);
};

export default LogoutButton;
