'use client';
import useAuthCheck from '@/hooks/user/useAuthCheck';
import { useRouter } from 'next/navigation';

const AuthLayoutCheck = () => {
	const router = useRouter();
	const { authChecked, publicPath } = useAuthCheck();

	if (!authChecked && !publicPath) {
		router.push('/login');
		return null;
	}
	if (authChecked && publicPath) {
		router.push('/');
		return null;
	}
	return null;
};

export default AuthLayoutCheck;
