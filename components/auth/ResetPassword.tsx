'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
	resetPasswordFormItems,
	ResetPasswordSchema,
	ResetPasswordSchemaType,
} from '@/lib/helper/auth';
import { baseAxiosInstance, getError } from '@/lib/utils';
import { Loader, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';

const ResetPassword = ({
	searchParams,
}: {
	searchParams: { token: string; id: string };
}) => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const form = useForm<ResetPasswordSchemaType>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			password: '',
			confirm_password: '',
		},
	});

	const onSubmit = async (data: ResetPasswordSchemaType) => {
		try {
			setLoading(true);
			const res = await baseAxiosInstance.post('/user/reset-password', {
				...data,
				token: searchParams.token,
				id: searchParams.id,
			});
			if (res?.status === 200) {
				toast.success('Password reset successfully');
				router.refresh();
				router.push('/login');
			} else {
				toast.error(getError(res?.data?.message));
			}
		} catch (error) {
			toast.error(getError(error));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!searchParams.token || !searchParams.id) {
			router.push('/forgot-password');
		}
	}, [router, searchParams]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid w-full gap-3"
			>
				{resetPasswordFormItems.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}
				<Button
					className="mt-2 flex w-full gap-2"
					type="submit"
					disabled={loading}
				>
					{loading ? <Loader className="animate-spin" /> : <Lock />}{' '}
					Reset Password
				</Button>
			</form>
		</Form>
	);
};

export default ResetPassword;
