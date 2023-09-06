import { useUserUpdateMutation } from '@/features/user/user-api';
import { getUserState } from '@/features/user/user-slice';
import { getError } from '@/utils/helpers';
import { userUpdateFormInputs } from '@/utils/helpers/auth-helper';
import { User } from '@/utils/types/auth-types';
import { getEventProps } from '@/utils/types/input-types';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../shared/button/Button';
import Input from '../shared/input/Input';

const UserEditData = ({ closeModal }: any) => {
	const [inputsValue, setInputsValue] = useState({});
	const [passwordChange, setPasswordChange] = useState(true);
	const user = useSelector(getUserState);
	const [modifiedInputElms, setModifiedInputElms] = useState(
		userUpdateFormInputs?.map((input) => ({
			...input,
			value: user[input.name as keyof User] ?? null,
		}))
	);

	const router = useRouter();
	const [update, { isSuccess, isLoading, isError, error }] =
		useUserUpdateMutation();

	const getEvent: getEventProps = (name, value) => {
		setModifiedInputElms((prev: any) =>
			prev.map((item: any) => {
				if (name === item.name) {
					return { ...item, value };
				}
				return item;
			})
		);
		setInputsValue((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const updateMutation = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { password, currentPassword, confirmPassword, ...rest }: any =
			inputsValue;
		if (passwordChange) {
			if (password.length >= 6) {
				if (password === confirmPassword) {
					update({
						id: user.userId,
						data: {
							...rest,
							passwordChange,
							currentPassword,
							password,
						},
					});
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
		} else if (!passwordChange) {
			update({ id: user.userId, data: { ...rest, passwordChange } });
		}
	};

	useEffect(() => {
		setModifiedInputElms((prev: any) =>
			prev.map((item: any) => ({
				...item,
				hide:
					item.type === 'password' && !passwordChange ? true : false,
			}))
		);
	}, [passwordChange]);

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Updated', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			closeModal();
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, router]);
	return (
		<form
			onSubmit={updateMutation}
			className="rounded p-3 bg-[#0B2447]"
		>
			<div className="flex justify-end items-center gap-1 ">
				<input
					id="passwordChange"
					type="checkbox"
					checked={passwordChange}
					onChange={(e) => setPasswordChange(e.target.checked)}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
				/>
				<label
					htmlFor="passwordChange"
					className="text-sm font-medium text-white select-none cursor-pointer"
				>
					Change Password?
				</label>
			</div>
			<div className="grid md:grid-cols-2 gap-2">
				{modifiedInputElms?.map((input: any) =>
					input?.hide ? null : (
						<Input
							key={input.name}
							getEvent={getEvent}
							extraClass={`input-label-white`}
							{...input}
						/>
					)
				)}
			</div>
			<div className="flex justify-end mt-6">
				<Button
					type="submit"
					name="Update"
					loading={isLoading}
					extraClassNames="!bg-white !text-black"
					mutation
				/>
			</div>
		</form>
	);
};

export default UserEditData;
