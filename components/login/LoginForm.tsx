'use client';
import Button from '@/components/shared/button/Button';
import Input from '@/components/shared/input/Input';
import Error from '@/components/shared/ui/Error';
import { useLoginMutation } from '@/features/user/user-api';
import { loginFormInputs } from '@/utils/helpers/login-helper';
import { getEventProps } from '@/utils/types/input-types';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

const LoginForm = () => {
	const router = useRouter();
	const [inputsValue, setInputsValue] = useState({});
	const [login, { isSuccess, isError }] = useLoginMutation();

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
		isSuccess && router.push('/');
	}, [isSuccess, router]);

	return (
		<form onSubmit={loginMutation}>
			{isError && <Error />}
			{loginFormInputs?.map((input) => (
				<Input
					key={input.name}
					getEvent={getEvent}
					{...input}
				/>
			))}
			<div className="flex justify-end mt-6">
				<Button
					type="submit"
					name="Login"
				/>
			</div>
		</form>
	);
};

export default LoginForm;
