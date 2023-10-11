'use client';
import Button from '@/components/ui/button/Button';
import FormInput from '@/components/ui/input/FormItem';
import { useRegisterMutation } from '@/features/user/user-api';
import { getError } from '@/utils/helpers';
import { registerFormInputs } from '@/utils/helpers/user/auth-helper';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup
			.string()
			.required()
			.min(6, 'Password is too short - should be 6 chars minimum.'),
		confirmPassword: yup
			.string()
			.required()
			.min(6, 'Password is too short - should be 6 chars minimum.'),
	})
	.required();

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
	});
	const router = useRouter();
	const [registerHandler, { isSuccess, isLoading, isError, error }] =
		useRegisterMutation();
	const registerMutation = (data: any) => {
		const { password, confirmPassword, ...rest } = data;
		if (password === confirmPassword) {
			registerHandler({ ...rest, password });
		} else {
			toast.error('Password miss match', {
				position: 'top-center',
				autoClose: 1000,
			});
		}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Registered', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			router.push('/auth/login');
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, router]);

	return (
		<form onSubmit={handleSubmit(registerMutation)}>
			<div className="flex flex-col gap-2">
				{registerFormInputs?.map((input) => (
					<FormInput
						key={input.name}
						register={register}
						input={input}
						errors={errors}
					/>
				))}
			</div>
			<div className="flex justify-end mt-6">
				<Button
					type="submit"
					name="Register"
					extraClassNames="w-full"
					auth={true}
					loading={isLoading}
				/>
			</div>
		</form>
	);
};

export default RegisterForm;
