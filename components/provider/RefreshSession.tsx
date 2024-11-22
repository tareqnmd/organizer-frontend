'use client';
import { AuthErrorEnum } from '@/lib/helper/auth';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const RefreshSession = () => {
	const { data: session } = useSession();
	useEffect(() => {
		if (
			session?.error &&
			session?.error === AuthErrorEnum.REFRESH_ACCESS_TOKEN_ERROR
		) {
			signIn();
		}
	}, [session?.error]);

	return null;
};

export default RefreshSession;
