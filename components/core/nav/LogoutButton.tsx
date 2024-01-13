'use client';

import { clearCookie } from '@/lib/server-func';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';

const LogoutButton = ({ extraClass }: { extraClass: string }) => {
	const logoutHandler = async () => {
		await clearCookie();
		await signOut({
			callbackUrl: `${window.location.origin}/login`,
		});
	};
	return (
		<button
			className={cn('transition hover:underline', extraClass)}
			onClick={logoutHandler}
		>
			Logout
		</button>
	);
};

export default LogoutButton;
