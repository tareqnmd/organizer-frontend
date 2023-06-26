'use client';
import { getUserState } from '@/features/user/user-slice';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const useAuthCheck = () => {
	const pathname = usePathname();
	const user = useSelector(getUserState);

	const userCheck = !!user?.name && !!user.email;

	return { authChecked: userCheck, pathname };
};

export default useAuthCheck;
