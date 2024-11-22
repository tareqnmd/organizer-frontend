'use client';
import { AuthErrorEnum } from '@/lib/helper/auth';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const RefreshSession = () => {
	const { data: session } = useSession();
	useEffect(() => {
		if (session?.error === AuthErrorEnum.REFRESH_ACCESS_TOKEN_ERROR) {
			signIn();
		}
	}, [session]);

	return null;
};

export default RefreshSession;
