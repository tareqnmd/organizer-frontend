import { signOut } from 'next-auth/react';
import { clearCookie } from './server-func';

export const logoutHandler = async () => {
	await clearCookie();
	await signOut({
		callbackUrl: `${window.location.origin}/login`,
	});
};
