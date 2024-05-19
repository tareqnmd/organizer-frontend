'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { getError } from '@/lib/common-func';
import { type_categories_form_items } from '@/lib/form-items';
import {
	useCreateBudgetCategoryMutation,
	useEditBudgetCategoryMutation,
} from '@/store/features/budget/category/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { BudgetCategory } from '../../../../types/modules/budget/budget-category-types';
const FormSchema = z.object({
	name: z.string().min(3, {
		message: 'Name must be at least 3 characters.',
	}),
	typeId: z.string(),
});
const BudgetCategoryForm = ({
	category,
	setModalClose,
}: {
	category?: BudgetCategory;
	setModalClose: any;
}) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			typeId: '',
		},
	});
	const [
		edit,
		{
			isLoading: isEditLoading,
			isError: isEditError,
			isSuccess: isEditSuccess,
			error: editError,
		},
	] = useEditBudgetCategoryMutation();
	const [
		create,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useCreateBudgetCategoryMutation();
	const onSubmit = (values: any) => {
		category?.id ? edit({ ...values, id: category.id }) : create(values);
	};

	useEffect(() => {
		if (category?.name && category.typeId) {
			form.setValue('name', category.name);
			form.setValue('typeId', category.typeId);
		}
	}, [form, category]);

	useEffect(() => {
		if (isEditError || isCreateError || isEditSuccess || isCreateSuccess) {
			toast(
				isEditError || isCreateError ? (
					<ErrorMessage
						message={getError(category?.id ? editError : createError)}
					/>
				) : (
					<SuccessMessage
						message={`Category successfully ${
							category?.id ? 'updated' : 'created'
						}`}
					/>
				)
			);
			setModalClose(false);
		}
	}, [
		category?.id,
		createError,
		editError,
		isCreateError,
		isCreateSuccess,
		isEditError,
		isEditSuccess,
		setModalClose,
	]);
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full min-w-[300px] grid gap-3"
			>
				{type_categories_form_items.map((input) => (
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
						{category?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default BudgetCategoryForm;
