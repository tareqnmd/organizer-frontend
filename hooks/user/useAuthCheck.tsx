'use client';
import { setThemeLoading } from '@/features/theme/slice';
import { getUserState } from '@/features/user/slice';
import { publicPaths } from '@/utils/helpers';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAuthCheck = () => {
	const pathname = usePathname();
	const dispatch = useDispatch();
	const [publicPath, SetPublicPath] = useState(true);
	const [authChecked, setAuthCheck] = useState(false);
	const user = useSelector(getUserState);

	useEffect(() => {
		SetPublicPath(publicPaths.includes(pathname));
		setAuthCheck(!!user?.name && !!user.email);
		const loadingTimeout = setTimeout(() => {
			dispatch(setThemeLoading(false));
		}, 1500);
		return () => {
			clearTimeout(loadingTimeout);
		};
	}, [user, dispatch, pathname]);

	return { authChecked, publicPath };
};

export default useAuthCheck;
