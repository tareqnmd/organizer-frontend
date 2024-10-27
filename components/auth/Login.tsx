'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { loginFormItems } from '@/lib/helper/auth';
import { LoginSchema } from '@/lib/helper/auth/schemas';
import { getRouteName, Routes } from '@/lib/routes';
import { getError } from '@/lib/utils';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';

const Login = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
		try {
			setLoading(true);
			const res = await signIn('login', { ...data, redirect: false });
			if (res?.ok) {
				toast.success('Login Successful');
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
				{loginFormItems.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}

				<Link
					className="ml-auto w-max text-xs"
					href={Routes.FORGOT_PASSWORD}
				>
					{getRouteName('auth', Routes.FORGOT_PASSWORD)}?
				</Link>
				<Button
					className="mt-2 flex w-full gap-2"
					type="submit"
					disabled={loading}
				>
					<LogIn /> Login
				</Button>
			</form>
		</Form>
	);
};

export default Login;
