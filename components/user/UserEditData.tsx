import { useUserUpdateMutation } from '@/features/user/user-api';
import { getError } from '@/utils/helpers';
import { userUpdateFormInputs } from '@/utils/helpers/auth-helper';
import { getEventProps } from '@/utils/types/input-types';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../shared/button/Button';
import Input from '../shared/input/Input';

const UserEditData = () => {
	const [inputsValue, setInputsValue] = useState({});
	const router = useRouter();
	const [update, { isSuccess, isLoading, isError, error }] =
		useUserUpdateMutation();

	const getEvent: getEventProps = (name, value) => {
		setInputsValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const updateMutation = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { password, confirmPassword }: any = inputsValue;
		if (password.length >= 6) {
			if (password === confirmPassword) {
				update(inputsValue);
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
			toast.success('Successfully Updated', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, router]);
	return (
		<form
			onSubmit={updateMutation}
			className="my-3 rounded p-3 bg-white"
		>
			<div className="grid grid-cols-2 gap-2">
				{userUpdateFormInputs?.map((input) => (
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
					name="Update"
					loading={isLoading}
				/>
			</div>
		</form>
	);
};

export default UserEditData;
