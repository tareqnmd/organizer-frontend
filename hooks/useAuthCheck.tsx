'use client';
import { setThemeLoading } from '@/features/theme/theme-slice';
import { getUserState } from '@/features/user/user-slice';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAuthCheck = () => {
	const pathname = usePathname();
	const dispatch = useDispatch();
	const [authChecked, setAuthCheck] = useState(false);
	const user = useSelector(getUserState);

	useEffect(() => {
		setAuthCheck(!!user?.name && !!user.email);
		const loadingTimeout = setTimeout(() => {
			dispatch(setThemeLoading(false));
		}, 1500);
		return () => {
			clearTimeout(loadingTimeout);
		};
	}, [user, dispatch]);

	return { authChecked, pathname };
};

export default useAuthCheck;
