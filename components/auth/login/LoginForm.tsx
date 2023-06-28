'use client';
import Button from '@/components/shared/button/Button';
import Input from '@/components/shared/input/Input';
import { useLoginMutation } from '@/features/user/user-api';
import { getError } from '@/utils/helpers';
import { loginFormInputs } from '@/utils/helpers/auth-helper';
import { getEventProps } from '@/utils/types/input-types';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const LoginForm = () => {
	const [inputsValue, setInputsValue] = useState({});
	const [login, { isSuccess, isLoading, isError, error }] = useLoginMutation();

	const getEvent: getEventProps = (name, value) => {
		setInputsValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const loginMutation = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		login(inputsValue);
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
		<form onSubmit={loginMutation}>
			<div className="flex flex-col gap-2">
				{loginFormInputs?.map((input) => (
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
					name="Login"
					extraClassNames="w-full"
					loading={isLoading}
				/>
			</div>
		</form>
	);
};

export default LoginForm;
