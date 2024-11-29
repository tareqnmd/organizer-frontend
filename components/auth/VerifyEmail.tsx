'use client';

import { baseAxiosInstance, getError } from '@/lib/utils';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

const VerifyEmail = ({
	searchParams,
}: {
	searchParams: { token: string; id: string };
}) => {
	const router = useRouter();
	useEffect(() => {
		const verifyEmail = async () => {
			try {
				const res = await baseAxiosInstance.post('/user/verify-email', {
					token: searchParams?.token,
					id: searchParams?.id,
				});
				if (res?.data) {
					toast.success(res?.data?.message);
				} else {
					toast.error(getError(res?.data));
				}
			} catch (error) {
				toast.error(getError(error));
			} finally {
				router.push('/login');
			}
		};
		if (searchParams?.token && searchParams?.id) {
			verifyEmail();
		} else {
			router.push('/login');
		}
	}, [router, searchParams]);
	return (
		<div>
			<Loader className="animate-spin" />
		</div>
	);
};

export default VerifyEmail;
