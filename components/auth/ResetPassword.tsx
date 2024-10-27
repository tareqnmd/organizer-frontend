'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { resetPasswordFormItems } from '@/lib/helper/auth';
import { ResetPasswordSchema } from '@/lib/helper/auth/schemas';
import { getError } from '@/lib/utils';
import { Lock } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';

const ResetPassword = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const form = useForm<z.infer<typeof ResetPasswordSchema>>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			password: '',
			confirm_password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof ResetPasswordSchema>) => {
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
					<Lock /> Reset Password
				</Button>
			</form>
		</Form>
	);
};

export default ResetPassword;
