import { useUserUpdateMutation } from '@/features/user/api';
import { getUserState } from '@/features/user/slice';
import { getError } from '@/utils/helpers';
import { userUpdateFormInputs } from '@/utils/helpers/user/auth-helper';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import Button from '../ui/button/Button';
import FormInput from '../ui/input/FormItem';

const UserEditData = ({ closeModal }: any) => {
	const [passwordChange, setPasswordChange] = useState(true);
	const schema = yup
		.object(
			passwordChange
				? {
						name: yup.string().required(),
						email: yup.string().email().required(),
						password: yup
							.string()
							.required()
							.min(
								6,
								'Password is too short - should be 6 chars minimum.'
							),
						confirmPassword: yup
							.string()
							.required()
							.min(
								6,
								'Password is too short - should be 6 chars minimum.'
							),
						currentPassword: yup
							.string()
							.required()
							.min(
								6,
								'Password is too short - should be 6 chars minimum.'
							),
				  }
				: {
						name: yup.string().required(),
						email: yup.string().email().required(),
				  }
		)
		.required();
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<any>({
		resolver: yupResolver(schema),
	});
	const user = useSelector(getUserState);

	const [update, { isSuccess, isLoading, isError, error }] =
		useUserUpdateMutation();

	const updateMutation = (data: any) => {
		const { password, currentPassword, confirmPassword, ...rest } = data;
		if (passwordChange) {
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
		} else if (!passwordChange) {
			update({ id: user.userId, data: { ...rest, passwordChange } });
		}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Updated', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			reset();
			closeModal();
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, reset, closeModal]);

	useEffect(() => {
		if (user?.email) {
			setValue('name', user?.name);
			setValue('email', user?.email);
		}
	}, [user, setValue]);

	return (
		<form
			onSubmit={handleSubmit(updateMutation)}
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
				{userUpdateFormInputs?.map((input: any) =>
					input?.type === 'password' && !passwordChange ? null : (
						<FormInput
							key={input.name}
							input={input}
							extraClass={`input-label-white`}
							register={register}
							errors={errors}
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
