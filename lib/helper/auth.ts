import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { clearCookie } from './server-func';

export const logoutHandler = async () => {
	try {
		await clearCookie();
		await signOut({
			callbackUrl: `${window.location.origin}/login`,
		});
	} catch (error) {
		await clearCookie();
		redirect('/login');
	}
};
