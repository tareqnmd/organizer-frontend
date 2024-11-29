'use client';
import {
	RegisterSchemaType,
	registrationFormItems,
	RegistrationSchema,
} from '@/lib/helper/auth';
import { baseAxiosInstance, getError } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';
import { Button } from '../ui/button';
import { Form } from '../ui/form';

const Registration = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const form = useForm<RegisterSchemaType>({
		resolver: zodResolver(RegistrationSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: RegisterSchemaType) => {
		try {
			setLoading(true);
			const res = await baseAxiosInstance.post('/user/register', data);
			if (res?.status === 201) {
				toast.success(res?.data?.message);
				router.push('/login');
			} else {
				toast.error(getError(res?.data));
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
				{registrationFormItems.map((input) => (
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
					{loading ? <Loader className="animate-spin" /> : <LogIn />}{' '}
					Registration
				</Button>
			</form>
		</Form>
	);
};

export default Registration;
