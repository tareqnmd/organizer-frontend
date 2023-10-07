'use client';
import Button from '@/components/ui/button/Button';
import FormInput from '@/components/ui/input/FormItem';
import { useLoginMutation } from '@/features/user/user-api';
import { getError } from '@/utils/helpers';
import { loginFormInputs } from '@/utils/helpers/auth-helper';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().required(),
	})
	.required();

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
	});
	const [login, { isSuccess, isLoading, isError, error }] =
		useLoginMutation();

	const loginMutation = (data: any) => {
		login(data);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully logged in', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error]);

	return (
		<form onSubmit={handleSubmit(loginMutation)}>
			<div className="flex flex-col gap-2">
				{loginFormInputs?.map((input) => (
					<FormInput
						key={input.name}
						input={input}
						register={register}
						errors={errors}
					/>
				))}
			</div>
			<div className="flex justify-end mt-6">
				<Button
					type="submit"
					name="Login"
					extraClassNames="w-full"
					auth={true}
					loading={isLoading}
				/>
			</div>
		</form>
	);
};

export default LoginForm;
