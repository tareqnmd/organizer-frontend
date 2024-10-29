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
import { getError } from '@/lib/utils';
import { Loader, Lock } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';

const ResetPassword = () => {
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
			const res = await signIn('reset-password', {
				...data,
				redirect: false,
			});
			if (res?.ok) {
				toast.success('Password reset successfully');
				router.refresh();
			} else {
				toast.error(getError(res?.error));
			}
		} catch (error) {
			toast.error(getError(error));
		} finally {
			setLoading(false);
		}
	};

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
