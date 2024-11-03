'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import {
	BoardSchemaType,
	BoardType,
	todoBoardBgOptions,
	todoBoardFormInputs,
} from '@/lib/helper/todo';
import { BoardSchema } from '@/lib/helper/todo/schemas';
import { getError } from '@/lib/utils';
import {
	useCreateBoardMutation,
	useEditBoardMutation,
} from '@/store/features/todo/border/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import BoardColor from './BoardColor';

const BoardForm = ({
	board,
	workspaceId,
	setOpen,
}: {
	board?: BoardType;
	workspaceId?: string;
	setOpen: (arg: boolean) => void;
}) => {
	const form = useForm<BoardSchemaType>({
		resolver: zodResolver(BoardSchema),
		defaultValues: {
			title: board?.title || '',
			boardBg: board?.boardBg || todoBoardBgOptions[0].value,
			workspaceId: workspaceId || board?.workspaceId || '',
		},
	});
	const [bg, setBg] = useState<string>(
		board?.boardBg || todoBoardBgOptions[0].value,
	);
	const router = useRouter();
	const [
		edit,
		{
			isLoading: isEditLoading,
			isError: isEditError,
			isSuccess: isEditSuccess,
			error: editError,
		},
	] = useEditBoardMutation();
	const [
		create,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useCreateBoardMutation();

	const onSubmit = async (values: BoardSchemaType) => {
		board?.id
			? await edit({ data: values, id: board.id })
			: await create(values);
	};

	useEffect(() => {
		if (isCreateSuccess || isEditSuccess) {
			toast.success(
				`Board successfully ${board?.id ? 'updated' : 'created'}`,
			);
			setOpen(false);
			router.refresh();
		} else if (isEditError || isCreateError) {
			toast.error(getError(editError || createError));
		}
	}, [
		board?.id,
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
		form.setValue('boardBg', bg);
	}, [bg, form]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid w-full gap-3"
			>
				<BoardColor bg={bg} setBg={setBg} />
				{todoBoardFormInputs.map((input) => (
					<CustomFormInput
						key={input.name}
						input={{
							...input,
							className: input.name === 'boardBg' ? 'hidden' : '',
							disabled:
								input.name === 'workspaceId' &&
								!!(workspaceId || board?.workspaceId),
						}}
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
						{board?.id ? 'Update' : 'Create'}
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default BoardForm;
