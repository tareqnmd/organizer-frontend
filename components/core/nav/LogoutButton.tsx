'use client';

import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';

const LogoutButton = ({ extraClass }: { extraClass: string }) => {
	return (
		<button
			className={cn('transition hover:underline', extraClass)}
			onClick={() =>
				signOut({
					callbackUrl: `${window.location.origin}/login`,
				})
			}
		>
			Logout
		</button>
	);
};

export default LogoutButton;
