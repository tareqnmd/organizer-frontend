'use client';
import { getUserState } from '@/features/user/user-slice';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useAuthCheck = () => {
	const pathname = usePathname();
	const user = useSelector(getUserState);
	const [authChecked, setAuthCheck] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setAuthCheck(!!user?.name && !!user.email);
		const loadingTimeout = setTimeout(() => {
			setLoading(false);
		}, 1500);
		return () => {
			clearTimeout(loadingTimeout);
		};
	}, [user]);

	return { loading, authChecked, pathname };
};

export default useAuthCheck;
