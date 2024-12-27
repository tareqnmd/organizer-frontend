'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import {
	timeTrackProjectFormItems,
	TimeTrackProjectSchema,
	TimeTrackProjectSchemaType,
	TimeTrackProjectType,
} from '@/lib/helper/time-track';
import { getError } from '@/lib/utils';
import {
	useTimeTrackProjectCreateMutation,
	useTimeTrackProjectEditMutation,
} from '@/store/features/time-track/project/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const TimeTrackProjectForm = ({
	project,
	setOpen,
}: {
	project?: TimeTrackProjectType;
	setOpen: (arg: boolean) => void;
}) => {
	const form = useForm<TimeTrackProjectSchemaType>({
		resolver: zodResolver(TimeTrackProjectSchema),
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
	] = useTimeTrackProjectEditMutation();
	const [
		create,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useTimeTrackProjectCreateMutation();

	const onSubmit = async (values: TimeTrackProjectSchemaType) => {
		project?.id
			? await edit({ data: values, id: project.id })
			: await create(values);
	};

	useEffect(() => {
		if (isCreateSuccess || isEditSuccess) {
			toast.success(
				`Project successfully ${project?.id ? 'updated' : 'created'}`,
			);
			setOpen(false);
			router.refresh();
		} else if (isEditError || isCreateError) {
			toast.error(getError(editError || createError));
		}
	}, [
		project?.id,
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
		if (project?.name) {
			form.setValue('name', project.name);
		}
	}, [form, project]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid w-full gap-3"
			>
				{timeTrackProjectFormItems.map((input) => (
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
						{project?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default TimeTrackProjectForm;
