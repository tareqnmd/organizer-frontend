'use client';

import { clearCookie } from '@/lib/common-func';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';

const LogoutButton = ({ extraClass }: { extraClass: string }) => {
	return (
		<button
			className={cn('transition hover:underline', extraClass)}
			onClick={() => {
				clearCookie();
				signOut({
					callbackUrl: `${window.location.origin}/login`,
				});
			}}
		>
			Logout
		</button>
	);
};

export default LogoutButton;
