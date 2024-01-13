'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { login_form_items } from '@/lib/form-items';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';
import ErrorMessage from '../common/message/ErrorMessage';
import SuccessMessage from '../common/message/SuccessMessage';

const FormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters.',
	}),
});

export function LoginForm() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		try {
			setLoading(true);
			const res = await signIn('credentials', { ...data, redirect: false });
			if (res?.error) throw new Error();
			toast(<SuccessMessage />);
			if (res?.status === 200) {
				router.push('/');
			}
		} catch (error) {
			toast(<ErrorMessage />);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full min-w-[300px] grid gap-3"
			>
				{login_form_items.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}
				<Button
					className="w-full flex gap-2 mt-2"
					type="submit"
					disabled={loading}
				>
					<LogIn /> Login
				</Button>
			</form>
		</Form>
	);
}
