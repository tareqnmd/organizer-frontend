'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import {
	BudgetTypeSubmitType,
	BudgetTypeType,
} from '@/lib/helper/modules/budget';
import { typeFormItems } from '@/lib/helper/modules/budget/form-items';
import { getError } from '@/lib/utils';
import {
	useCreateBudgetTypeMutation,
	useEditBudgetTypeMutation,
} from '@/store/features/budget/type/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const FormSchema = z.object({
	name: z.string().min(3, {
		message: 'Subject must be at least 3 characters.',
	}),
});

const BudgetTypeForm = ({
	type,
	setOpen,
}: {
	type?: BudgetTypeType;
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

	const onSubmit = async (values: BudgetTypeSubmitType) => {
		type?.id
			? await edit({ data: values, id: type.id })
			: await create(values);
	};

	useEffect(() => {
		if (isCreateSuccess || isEditSuccess) {
			toast.success(
				`Type successfully ${type?.id ? 'updated' : 'created'}`,
			);
			setOpen(false);
			router.refresh();
		} else if (isEditError || isCreateError) {
			toast.error(getError(editError || createError));
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
				className="grid w-full gap-3"
			>
				{typeFormItems.map((input) => (
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
						{type?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default BudgetTypeForm;
