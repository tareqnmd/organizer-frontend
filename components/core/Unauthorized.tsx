'use client';
import { useAuthCheckQuery } from '@/store/features/auth/api';
import { redirect, useRouter } from 'next/navigation';

const Unauthorized = () => {
	const router = useRouter();
	const { data } = useAuthCheckQuery({});
	data && redirect('/');
	return null;
};

export default Unauthorized;
