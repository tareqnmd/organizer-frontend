'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
	loginFormItems,
	LoginSchema,
	LoginSchemaType,
} from '@/lib/helper/auth';
import { Routes } from '@/lib/routes';
import { baseAxiosInstance, getError } from '@/lib/utils';
import { Loader, LogIn, Mail } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';

const Login = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [verifyEmail, setVerifyEmail] = useState(false);
	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const sendVerificationEmail = async () => {
		if (form.getValues('email')) {
			try {
				setLoading(true);
				const res = await baseAxiosInstance.post(
					'/user/send-verification-email',
					{ email: form.getValues('email') },
				);
				if (res?.data) {
					toast.success('Verification Email Sent');
				} else {
					toast.error(getError(res?.data));
				}
			} catch (error) {
				toast.error(getError(error));
			} finally {
				setLoading(false);
			}
		} else {
			toast.error('Please enter your email');
		}
	};

	const onSubmit = async (data: LoginSchemaType) => {
		try {
			setLoading(true);
			const res = await signIn('login', { ...data, redirect: false });
			if (res?.ok) {
				toast.success('Login Successful');
				router.refresh();
			} else {
				const verifyEmail = res?.error === 'Email is not verified';
				setVerifyEmail(verifyEmail);
				const timeout = setTimeout(() => {
					setVerifyEmail(false);
					clearTimeout(timeout);
				}, 10000);
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
				{loginFormItems.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}

				<Link
					className="ml-auto w-max text-xs"
					href={Routes.FORGOT_PASSWORD_PATH}
				>
					{Routes.FORGOT_PASSWORD_NAME}?
				</Link>
				<Button
					className="mt-2 flex w-full gap-2"
					type="submit"
					disabled={loading}
				>
					{loading ? <Loader className="animate-spin" /> : <LogIn />}
					Login
				</Button>
				{verifyEmail && (
					<Button
						className="flex w-full gap-2 border border-dashed border-dark dark:border-light"
						type="button"
						disabled={loading}
						variant="link"
						onClick={sendVerificationEmail}
					>
						{loading ? (
							<Loader className="animate-spin" />
						) : (
							<Mail className="h-4 w-4" />
						)}
						Verify Email
					</Button>
				)}
			</form>
		</Form>
	);
};

export default Login;
