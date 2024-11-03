'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import {
	todoWorkspaceFormInputs,
	WorkspaceSchemaType,
	WorkspaceType,
} from '@/lib/helper/todo';
import { WorkspaceSchema } from '@/lib/helper/todo/schemas';
import { getError } from '@/lib/utils';
import {
	useCreateWorkspaceMutation,
	useEditWorkspaceMutation,
} from '@/store/features/todo/workspace/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const WorkspaceForm = ({
	workspace,
	setOpen,
}: {
	workspace?: WorkspaceType;
	setOpen: (arg: boolean) => void;
}) => {
	const form = useForm<WorkspaceSchemaType>({
		resolver: zodResolver(WorkspaceSchema),
		defaultValues: {
			title: workspace?.title || '',
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
	] = useEditWorkspaceMutation();
	const [
		create,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useCreateWorkspaceMutation();

	const onSubmit = async (values: WorkspaceSchemaType) => {
		workspace?.id
			? await edit({ data: values, id: workspace.id })
			: await create(values);
	};

	useEffect(() => {
		if (isCreateSuccess || isEditSuccess) {
			toast.success(
				`Workspace successfully ${workspace?.id ? 'updated' : 'created'}`,
			);
			setOpen(false);
			router.refresh();
		} else if (isEditError || isCreateError) {
			toast.error(getError(editError || createError));
		}
	}, [
		workspace?.id,
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
				{todoWorkspaceFormInputs.map((input) => (
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
						{workspace?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default WorkspaceForm;
