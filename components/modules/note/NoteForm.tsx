'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { noteFormItems } from '@/lib/form-items/modules/note';
import { getError } from '@/lib/helper/common';
import {
	useCreateNoteMutation,
	useEditNoteMutation,
} from '@/store/features/note/api';
import { NoteType } from '@/types/modules/note/budget-note-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

type NoteInput = {
	subject: string;
	details: string;
};

const FormSchema = z.object({
	subject: z.string().min(3, {
		message: 'Subject must be at least 3 characters.',
	}),
	details: z.string().min(6, {
		message: 'Details must be at least 6 characters.',
	}),
});

const NoteForm = ({ note }: { note?: NoteType }) => {
	const router = useRouter();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			subject: '',
			details: '',
		},
	});
	const [
		editNote,
		{
			isLoading: isEditLoading,
			isError: isEditError,
			isSuccess: isEditSuccess,
			error: editError,
		},
	] = useEditNoteMutation();
	const [
		createNote,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useCreateNoteMutation();
	const onSubmit = (values: NoteInput) => {
		note?.id ? editNote({ data: values, id: note.id }) : createNote(values);
	};

	useEffect(() => {
		if (isEditError || isCreateError || isEditSuccess || isCreateSuccess) {
			toast(
				isEditError || isCreateError ? (
					<ErrorMessage
						message={getError(note?.id ? editError : createError)}
					/>
				) : (
					<SuccessMessage
						message={`Note successfully ${note?.id ? 'updated' : 'created'}`}
					/>
				)
			);
			router.refresh();
		}
	}, [
		note?.id,
		createError,
		editError,
		isCreateError,
		isCreateSuccess,
		isEditError,
		isEditSuccess,
		router,
	]);

	useEffect(() => {
		if (note?.id) {
			form.setValue('subject', note.subject);
			form.setValue('details', note.details);
		}
	}, [form, note]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full min-w-[300px] grid gap-3"
			>
				{noteFormItems.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}
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
					{note?.id ? 'Update' : 'Create'}
				</Button>
			</form>
		</Form>
	);
};

export default NoteForm;
