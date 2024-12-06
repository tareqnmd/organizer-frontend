'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import {
	BudgetCategorySchema,
	BudgetCategorySchemaType,
	BudgetCategoryType,
} from '@/lib/helper/budget';
import { categoryFormItems } from '@/lib/helper/budget/form-items';
import { getError } from '@/lib/utils';
import {
	useCreateBudgetCategoryMutation,
	useEditBudgetCategoryMutation,
} from '@/store/features/budget/category/api';
import { useTypeIsExpenseMutation } from '@/store/features/budget/type/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const BudgetCategoryForm = ({
	category,
	setOpen,
}: {
	category?: BudgetCategoryType;
	setOpen: (arg: boolean) => void;
}) => {
	const router = useRouter();
	const [saveExpense, setSaveExpense] = useState(false);
	const form = useForm<BudgetCategorySchemaType>({
		resolver: zodResolver(BudgetCategorySchema),
		defaultValues: {
			name: '',
			typeId: '',
		},
	});
	const [typeIsExpense] = useTypeIsExpenseMutation();
	const type = form.watch('typeId');
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
	const onSubmit = async (values: BudgetCategorySchemaType) => {
		category?.id
			? await edit({ data: values, id: category.id })
			: await create(values);
	};

	useEffect(() => {
		if (type) {
			typeIsExpense(type).then((res) => {
				setSaveExpense(res?.data ?? false);
			});
		}
	}, [type, typeIsExpense]);

	useEffect(() => {
		if (category?.name && category.typeId) {
			form.setValue('name', category.name);
			form.setValue('typeId', category.typeId);
			form.setValue('expenseSaving', category.savingExpense);
		}
	}, [form, category]);

	useEffect(() => {
		if (isCreateSuccess || isEditSuccess) {
			toast.success(
				`Category successfully ${category?.id ? 'updated' : 'created'}`,
			);
			setOpen(false);
			router.refresh();
		} else if (isEditError || isCreateError) {
			toast.error(getError(editError || createError));
		}
	}, [
		category?.id,
		createError,
		editError,
		isCreateError,
		isCreateSuccess,
		isEditError,
		isEditSuccess,
		router,
		setOpen,
	]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid w-full gap-3"
			>
				{categoryFormItems
					.filter((item) =>
						saveExpense ? true : item.name !== 'expenseSaving',
					)
					.map((input) => (
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
							<Loader className="animate-spin" size={16} />
						) : null}
						{category?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default BudgetCategoryForm;
