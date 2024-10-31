'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import {
	BudgetTransactionSchema,
	BudgetTransactionSchemaType,
	BudgetTransactionType,
} from '@/lib/helper/budget';
import { transactionFormItems } from '@/lib/helper/budget/form-items';
import { getError } from '@/lib/utils';
import {
	useCreateBudgetTransactionMutation,
	useEditBudgetTransactionMutation,
} from '@/store/features/budget/transaction/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const BudgetTransactionForm = ({
	transaction,
	setOpen,
}: {
	transaction?: BudgetTransactionType;
	setOpen: (arg: boolean) => void;
}) => {
	const router = useRouter();
	const form = useForm<BudgetTransactionSchemaType>({
		resolver: zodResolver(BudgetTransactionSchema),
		defaultValues: {
			categoryId: '',
			description: '',
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
	] = useEditBudgetTransactionMutation();
	const [
		create,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useCreateBudgetTransactionMutation();

	const onSubmit = async (values: BudgetTransactionSchemaType) => {
		transaction?.id
			? await edit({ data: values, id: transaction.id })
			: await create(values);
	};

	useEffect(() => {
		if (transaction?.id) {
			form.setValue('amount', transaction.amount);
			form.setValue('categoryId', transaction.categoryId);
			form.setValue('description', transaction.description);
			form.setValue('date', new Date(transaction.date));
		}
	}, [form, transaction]);

	useEffect(() => {
		if (isCreateSuccess || isEditSuccess) {
			toast.success(
				`Transaction successfully ${transaction?.id ? 'updated' : 'created'}`,
			);
			setOpen(false);
			router.refresh();
		} else if (isEditError || isCreateError) {
			toast.error(getError(editError || createError));
		}
	}, [
		transaction?.id,
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
				{transactionFormItems.map((input) => (
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
						{transaction?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default BudgetTransactionForm;
