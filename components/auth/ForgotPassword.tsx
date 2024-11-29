'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
	forgotPasswordFormItems,
	ForgotPasswordSchema,
	ForgotPasswordSchemaType,
} from '@/lib/helper/auth';
import { baseAxiosInstance, getError } from '@/lib/utils';
import { Loader, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';

const ForgotPassword = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const form = useForm<ForgotPasswordSchemaType>({
		resolver: zodResolver(ForgotPasswordSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (data: ForgotPasswordSchemaType) => {
		try {
			setLoading(true);
			const res = await baseAxiosInstance.post(
				'/user/forgot-password',
				data,
			);
			if (res?.status === 200) {
				toast.success(res?.data?.message);
				router.refresh();
			} else {
				toast.error(getError(res?.data?.message));
			}
		} catch (error: any) {
			toast.error(getError(error?.response));
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
				{forgotPasswordFormItems.map((input) => (
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
					{loading ? <Loader className="animate-spin" /> : <Send />}{' '}
					Send Reset Link
				</Button>
			</form>
		</Form>
	);
};

export default ForgotPassword;
