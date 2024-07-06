'use client';
import { useAuthCheckQuery } from '@/store/features/auth/api';
import { redirect } from 'next/navigation';

const Unauthorized = () => {
	const { data } = useAuthCheckQuery({});
	data && redirect('/');
	return null;
};

export default Unauthorized;
