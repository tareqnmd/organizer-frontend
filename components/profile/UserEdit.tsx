'use client';
import {
	userUpdateFormInputs,
	userUpdateFormInputsWithPassword,
} from '@/lib/form-items/profile';
import { getError } from '@/lib/helper/common';
import { useUserUpdateMutation } from '@/store/features/auth/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';
import * as z from 'zod';
import CustomFormInput from '../common/input/CustomFormInput';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import UserPasswordChange from './UserPasswordChange';

const FormSchema = (passwordChange = false) =>
	z.object(
		passwordChange
			? {
					name: z
						.string({ required_error: 'Name password is required.' })
						.min(3, 'Name must be at least 3 characters'),
					email: z.string().email(),
					password: z
						.string({
							required_error: 'Password is required.',
						})
						.min(6, 'Password is too short - should be 6 chars minimum.'),
					confirmPassword: z
						.string({ required_error: 'Confirm password is required.' })
						.min(6, 'Password is too short - should be 6 chars minimum.'),
					currentPassword: z
						.string({ required_error: 'Current password is required.' })
						.min(6, 'Password is too short - should be 6 chars minimum.'),
			  }
			: {
					name: z.string().min(3, 'Name must be at least 3 characters'),
					email: z.string().email(),
			  }
	);

const UserEdit = ({ user }: any) => {
	const [passwordChange, setPasswordChange] = useState(true);
	const router = useRouter();
	const form = useForm({
		resolver: zodResolver(FormSchema(passwordChange)),
		defaultValues: {
			name: user.name,
			email: user.email,
		},
	});
	const [update, { isSuccess, isLoading, isError, error }] =
		useUserUpdateMutation();

	const updateMutation = async (data: any) => {
		const { password, currentPassword, confirmPassword, ...rest } = data;
		if (passwordChange) {
			if (password === confirmPassword) {
				await update({
					id: user.id,
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
			await update({ id: user.id, data: { ...rest, passwordChange } });
		}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Updated');
			router.refresh();
			form.reset();
		}
		if (isError) {
			toast.error(getError(error));
		}
	}, [isSuccess, isError, error, form, router]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(updateMutation)}>
				<UserPasswordChange
					passwordChange={passwordChange}
					setPasswordChange={setPasswordChange}
				/>
				<div className="grid md:grid-cols-2 gap-2 mb-4">
					{[
						...(passwordChange
							? userUpdateFormInputsWithPassword
							: userUpdateFormInputs),
					].map((input) => (
						<CustomFormInput
							key={input.name}
							input={input}
							control={form.control}
						/>
					))}
				</div>
				<Button
					className="w-full flex gap-1 items-center"
					type="submit"
					disabled={isLoading}
				>
					{isLoading ? <FaSpinner className="animate-spin" /> : null}
					Update
				</Button>
			</form>
		</Form>
	);
};

export default UserEdit;
