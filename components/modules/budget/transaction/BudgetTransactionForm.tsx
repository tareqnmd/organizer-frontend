'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { getError } from '@/lib/common-func';
import { transactionFormItems } from '@/lib/form-items/transaction';
import {
	useCreateBudgetTransactionMutation,
	useEditBudgetTransactionMutation,
} from '@/store/features/budget/transaction/api';
import { BudgetTransactionType } from '@/types/modules/budget/budget-transaction-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
const FormSchema = z.object({
	description: z.string().min(3, {
		message: 'Description must be at least 3 characters.',
	}),
	categoryId: z.string().min(1, {
		message: 'Category is required!',
	}),
	amount: z.coerce
		.number({
			required_error: 'Amount is required',
			invalid_type_error: 'Amount must be a number',
		})
		.positive(),
	date: z.date({
		required_error: 'Date is required.',
	}),
});
const BudgetTransactionForm = ({
	transaction,
	setOpen,
}: {
	transaction?: BudgetTransactionType;
	setOpen: (arg: boolean) => void;
}) => {
	const router = useRouter();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			categoryId: '',
			description: '',
			date: new Date(),
			amount: 0,
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

	const onSubmit = (values: any) => {
		transaction?.id
			? edit({ data: values, id: transaction.id })
			: create(values);
	};

	useEffect(() => {
		if (transaction?.id) {
			form.setValue('amount', transaction.amount);
			form.setValue('categoryId', transaction.categoryId);
			form.setValue('description', transaction.description);
			form.setValue('date', transaction.date);
		}
	}, [form, transaction]);

	useEffect(() => {
		if (isEditError || isCreateError || isEditSuccess || isCreateSuccess) {
			toast(
				isEditError || isCreateError ? (
					<ErrorMessage
						message={getError(transaction?.id ? editError : createError)}
					/>
				) : (
					<SuccessMessage
						message={`Transaction successfully ${
							transaction?.id ? 'updated' : 'created'
						}`}
					/>
				)
			);
			router.refresh();
			setOpen(false);
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
				className="w-full min-w-[300px] grid gap-3"
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
							<Loader
								className="animate-spin"
								size={16}
							/>
						) : null}
						{transaction?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default BudgetTransactionForm;
