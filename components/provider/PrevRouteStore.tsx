'use client';
import { setPrevLink } from '@/store/features/theme/slice';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';

const exceptionLinks = [
	'/login',
	'/register',
	'/unauthorized',
	'/non-privileged',
	'/reset-password',
	'/forgot-password',
];

const PrevRouteStore = () => {
	const pathname = usePathname();
	const dispatch = useDispatch();
	if (!exceptionLinks.includes(pathname)) {
		dispatch(setPrevLink(pathname));
	}
	return null;
};

export default PrevRouteStore;
