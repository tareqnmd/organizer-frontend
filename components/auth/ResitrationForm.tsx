'use client';
import { registrationFormItems } from '@/helper/auth';
import { getError } from '@/helper/shared/common';
import { zodResolver } from '@hookform/resolvers/zod';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import CustomFormInput from '../common/input/CustomFormInput';
import { Button } from '../ui/button';
import { Form } from '../ui/form';

const FormSchema = z.object({
	name: z.string().min(3, {
		message: 'Name must be at least 3 characters.',
	}),
	email: z.string().email({
		message: 'Valid email required',
	}),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters.',
	}),
});

const RegistrationForm = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		try {
			setLoading(true);
			const res = await signIn('register', { ...data, redirect: false });
			if (res?.ok) {
				toast.success('Registration Successful');
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
				className="w-full grid gap-3"
			>
				{registrationFormItems.map((input) => (
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
					<LogIn /> Registration
				</Button>
			</form>
		</Form>
	);
};

export default RegistrationForm;
