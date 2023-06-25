'use client';
import { setUser } from '@/features/user/user-slice';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

const useAuthCheck = () => {
	const dispatch = useDispatch();
	const pathname = usePathname();
	const [loading, setLoading] = useState(true);

	const localStorageUser =
		typeof window !== 'undefined' ? localStorage?.getItem('user') : null;
	const user = useMemo(
		() => localStorageUser && JSON.parse(localStorageUser),
		[localStorageUser]
	);

	const userCheck = !!user?.name && !!user.email;

	useEffect(() => {
		if (userCheck) {
			dispatch(
				setUser({
					name: user.name,
					email: user.email,
					userId: user.userId,
				})
			);
		}
		setLoading(false);
	}, [user, userCheck, dispatch]);

	return { loading, authChecked: userCheck, pathname };
};

export default useAuthCheck;
