'use client';

import {
	UserEditSchemaWithoutPassword,
	UserEditSchemaWithoutPasswordType,
	UserEditSchemaWithPassword,
	UserEditSchemaWithPasswordType,
	UserType,
	userUpdateFormInputs,
	userUpdateFormInputsWithPassword,
} from '@/lib/helper/profile';
import { getError } from '@/lib/utils';
import { useUserUpdateMutation } from '@/store/features/auth/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import CustomFormInput from '../common/input/CustomFormInput';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import UserPasswordChange from './UserPasswordChange';

const UserEdit = ({ user }: { user: UserType }) => {
	const [passwordChange, setPasswordChange] = useState(true);
	const router = useRouter();
	const formWithoutPassword = useForm<UserEditSchemaWithoutPasswordType>({
		resolver: zodResolver(UserEditSchemaWithoutPassword),
		defaultValues: {
			email: user.email,
			name: user.name,
		},
	});
	const formWithPassword = useForm<UserEditSchemaWithPasswordType>({
		resolver: zodResolver(UserEditSchemaWithPassword),
		defaultValues: {
			email: user.email,
			name: user.name,
			password: '',
			confirm_password: '',
			current_password: '',
		},
	});
	const { update } = useSession();
	const [updateUser, { isSuccess, isLoading, isError, error }] =
		useUserUpdateMutation();

	const updateUserProfileWithoutPassword = async (
		data: UserEditSchemaWithoutPasswordType,
	) => {
		try {
			await updateUser({
				id: user.id,
				data: { ...data, passwordChange },
			});
			await update({ name: data.name });
			router.refresh();
		} catch (error) {}
	};

	const updateUserProfileWithPassword = async (
		data: UserEditSchemaWithPasswordType,
	) => {
		try {
			if (data.password === data.confirm_password) {
				await updateUser({
					id: user.id,
					data: {
						...data,
						passwordChange,
					},
				});
				await update({ name: data.name });
				router.refresh();
			} else {
				toast.error('Password miss match');
			}
		} catch (error) {}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Updated');
			formWithoutPassword.reset();
			formWithPassword.reset();
		}
		if (isError) {
			toast.error(getError(error));
		}
	}, [
		isSuccess,
		isError,
		error,
		formWithoutPassword,
		formWithPassword,
		router,
	]);

	return (
		<>
			<UserPasswordChange
				passwordChange={passwordChange}
				setPasswordChange={setPasswordChange}
			/>
			{passwordChange ? (
				<Form {...formWithPassword}>
					<form
						onSubmit={formWithPassword.handleSubmit(
							updateUserProfileWithPassword,
						)}
					>
						<div className="mb-4 grid gap-2 md:grid-cols-2">
							{userUpdateFormInputsWithPassword.map((input) => (
								<CustomFormInput
									key={input.name}
									input={input}
									control={formWithPassword.control}
								/>
							))}
						</div>
						<Button
							className="flex w-full items-center gap-1 transition-all active:scale-95"
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader className="animate-spin" />
							) : null}
							Update
						</Button>
					</form>
				</Form>
			) : (
				<Form {...formWithoutPassword}>
					<form
						onSubmit={formWithoutPassword.handleSubmit(
							updateUserProfileWithoutPassword,
						)}
					>
						<div className="mb-4 grid gap-2 md:grid-cols-2">
							{userUpdateFormInputs.map((input) => (
								<CustomFormInput
									key={input.name}
									input={input}
									control={formWithoutPassword.control}
								/>
							))}
						</div>
						<Button
							className="flex w-full items-center gap-1 transition-all active:scale-95"
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader className="animate-spin" />
							) : null}
							Update
						</Button>
					</form>
				</Form>
			)}
		</>
	);
};

export default UserEdit;
