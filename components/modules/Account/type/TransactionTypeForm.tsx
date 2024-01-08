'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { getError } from '@/lib/common-func';
import { type_form_items } from '@/lib/form-items';
import { useEditTypeMutation } from '@/store/features/account/type/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { Type } from './TransactionTypes';

type TypeInput = {
	name: string;
	type: string;
};

type EditType = {
	type?: Type;
};

const FormSchema = z.object({
	name: z.string().min(3, {
		message: 'Subject must be at least 3 characters.',
	}),
	type: z.enum(['Income', 'Expense'], {
		required_error: 'Type is required!',
	}),
});

const TransactionTypeForm = ({ type }: EditType) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			type: undefined,
		},
	});
	const [editType, { isLoading, isError, isSuccess, error }] =
		useEditTypeMutation();
	const onSubmit = (values: TypeInput) => {
		console.log('values', values);
	};

	useEffect(() => {
		if (isError || isSuccess) {
			toast(
				isError ? (
					<ErrorMessage message={getError(error)} />
				) : (
					<SuccessMessage message="Note successfully created" />
				)
			);
		}
	}, [isError, isSuccess, error]);

	useEffect(() => {
		if (type?.name) {
			form.setValue('name', type.name);
			form.setValue('type', type.type);
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
						Save changes
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default TransactionTypeForm;
