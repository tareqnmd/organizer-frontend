'use client';
import { setUser } from '@/features/user/user-slice';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useAuthCheck = () => {
	const dispatch = useDispatch();
	const pathname = usePathname();
	const [loading, setLoading] = useState(true);
	const localAuth = localStorage.getItem('user');
	const user = localAuth ? JSON.parse(localAuth) : null;
	const userCheck = !!user?.username && !!user.fullName;

	useEffect(() => {
		if (userCheck) {
			dispatch(
				setUser({
					fullName: user.fullName,
					username: user.username,
					userId: user.userId,
				})
			);
		}
		setLoading(false);
	}, [user, userCheck, dispatch]);

	return { loading, authChecked: userCheck, pathname };
};

export default useAuthCheck;
