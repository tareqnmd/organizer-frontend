'use client';
import { useAuthCheckQuery } from '@/store/features/auth/api';
import { useAppSelector } from '@/store/hooks';
import { redirect } from 'next/navigation';

const Unauthorized = () => {
	const { prevLink = '/' } = useAppSelector((state) => state.theme);
	const { data } = useAuthCheckQuery({});
	data && redirect(prevLink);
	return null;
};

export default Unauthorized;
