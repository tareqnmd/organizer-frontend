'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { getError } from '@/lib/common-func';
import { type_form_items } from '@/lib/form-items';
import {
	useCreateBudgetTypeMutation,
	useEditBudgetTypeMutation,
} from '@/store/features/budget/type/api';
import { BudgetType } from '@/types/modules/budget/budget-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

type TypeInput = {
	name: string;
	id?: string;
};

const FormSchema = z.object({
	name: z.string().min(3, {
		message: 'Subject must be at least 3 characters.',
	}),
});

const BudgetTypeForm = ({
	type,
	setOpen,
}: {
	type?: BudgetType;
	setOpen: (arg: boolean) => void;
}) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
		},
	});
	const router = useRouter();
	const [
		edit,
		{
			isLoading: isEditLoading,
			isError: isEditError,
			isSuccess: isEditSuccess,
			error: editError,
		},
	] = useEditBudgetTypeMutation();
	const [
		create,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useCreateBudgetTypeMutation();

	const onSubmit = (values: TypeInput) => {
		type?.name ? edit({ data: values, id: type.id }) : create(values);
	};

	useEffect(() => {
		if (isEditError || isCreateError || isEditSuccess || isCreateSuccess) {
			toast(
				isEditError || isCreateError ? (
					<ErrorMessage
						message={getError(type?.id ? editError : createError)}
					/>
				) : (
					<SuccessMessage
						message={`Type successfully ${type?.id ? 'updated' : 'created'}`}
					/>
				)
			);
			router.refresh();
			setOpen(false);
		}
	}, [
		type?.id,
		createError,
		editError,
		isCreateError,
		isCreateSuccess,
		isEditError,
		isEditSuccess,
		router,
		setOpen,
	]);

	useEffect(() => {
		if (type?.name) {
			form.setValue('name', type.name);
		}
	}, [form, type]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full min-w-[300px] grid gap-3"
			>
				{type_form_items.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}
				<DialogFooter>
					<Button
						disabled={isCreateLoading || isEditLoading}
						className="flex items-center gap-1"
						type="submit"
					>
						{isCreateLoading || isEditLoading ? (
							<Loader
								className="animate-spin"
								size={16}
							/>
						) : null}
						{type?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default BudgetTypeForm;
