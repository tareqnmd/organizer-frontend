'use client';
import { userUpdateFormInputs } from '@/lib/form-items/profile';
import { getError } from '@/lib/helper/common';
import { useUserUpdateMutation } from '@/store/features/auth/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';
import * as z from 'zod';
import CustomFormInput from '../common/input/CustomFormInput';
import { Button } from '../ui/button';
import { Form } from '../ui/form';

const UserEdit = ({ closeModal }: any) => {
	const [passwordChange, setPasswordChange] = useState(true);
	const schema = z
		.object(
			passwordChange
				? {
						name: z.string().min(3, 'Name must be at least 3 characters'),
						email: z.string().email(),
						password: z
							.string()
							.min(6, 'Password is too short - should be 6 chars minimum.'),
						confirmPassword: z
							.string()
							.min(6, 'Password is too short - should be 6 chars minimum.'),
						currentPassword: z
							.string()
							.min(6, 'Password is too short - should be 6 chars minimum.'),
				  }
				: {
						name: z.string().min(3, 'Name must be at least 3 characters'),
						email: z.string().email(),
				  }
		)
		.required();
	const form = useForm<any>({
		resolver: yupResolver(schema),
	});
	const {
		control,
		setValue,
		handleSubmit,
		formState: { errors },
		reset,
	} = form;
	const session: any = useSession();
	const user = session.data.user;
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
				toast.error('Password miss match');
			}
		} else if (!passwordChange) {
			update({ id: user.userId, data: { ...rest, passwordChange } });
		}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Updated');
			reset();
			closeModal();
		}
		if (isError) {
			toast.error(getError(error));
		}
	}, [isSuccess, isError, error, reset, closeModal]);

	useEffect(() => {
		if (user?.email) {
			setValue('name', user?.name);
			setValue('email', user?.email);
		}
	}, [user, setValue]);

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(updateMutation)}>
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
							<CustomFormInput
								key={input.name}
								input={input}
								control={control}
							/>
						)
					)}
				</div>
				<div className="flex justify-end mt-6">
					<Button
						className="w-full flex gap-2 mt-2"
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? (
							<FaSpinner
								className="animate-spin"
								size={16}
							/>
						) : null}{' '}
						Update
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default UserEdit;
