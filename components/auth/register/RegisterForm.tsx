'use client';
import Button from '@/components/shared/button/Button';
import Input from '@/components/shared/input/Input';
import { useRegisterMutation } from '@/features/user/user-api';
import { getError } from '@/utils/helpers';
import { registerFormInputs } from '@/utils/helpers/auth-helper';
import { getEventProps } from '@/utils/types/input-types';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const RegisterForm = () => {
	const [inputsValue, setInputsValue] = useState({});
	const router = useRouter();
	const [register, { isSuccess, isLoading, isError, error }] =
		useRegisterMutation();

	const getEvent: getEventProps = (name, value) => {
		setInputsValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const loginMutation = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { password, confirmPassword, ...rest }: any = inputsValue;
		if (password.length >= 6) {
			if (password === confirmPassword) {
				register({ ...rest, password });
			} else {
				toast.error('Password miss match', {
					position: 'top-center',
					autoClose: 1000,
				});
			}
		} else {
			toast.error('Password is too short', {
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
			router.push('/login');
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, router]);

	return (
		<form onSubmit={loginMutation}>
			<div className="flex flex-col gap-2">
				{registerFormInputs?.map((input) => (
					<Input
						key={input.name}
						getEvent={getEvent}
						{...input}
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
