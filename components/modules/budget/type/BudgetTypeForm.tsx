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
	const [editType, { isLoading, isError, isSuccess, error }] =
		useEditBudgetTypeMutation();
	const [createType] = useCreateBudgetTypeMutation();
	const onSubmit = (values: TypeInput) => {
		type?.name ? editType({ ...values, id: type.id }) : createType(values);
	};

	useEffect(() => {
		if (isError || isSuccess) {
			toast(
				isError ? (
					<ErrorMessage message={getError(error)} />
				) : (
					<SuccessMessage
						message={`Note successfully ${type?.id ? 'updated' : 'created'}`}
					/>
				)
			);
			router.refresh();
			setOpen(false);
		}
	}, [isError, isSuccess, error, type?.id, router, setOpen]);

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
						disabled={isLoading}
						type="submit"
					>
						{!type?.id ? 'Create' : 'Update'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default BudgetTypeForm;
