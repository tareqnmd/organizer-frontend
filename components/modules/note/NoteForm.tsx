'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { Form } from '@/components/ui/form';
import { noteFormItems } from '@/lib/form-items/modules/note';
import { getError } from '@/lib/helper/common';
import { useEditNoteMutation } from '@/store/features/note/api';
import { NoteType } from '@/types/modules/note/budget-note-types';
import { zodResolver } from '@hookform/resolvers/zod';
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
	details: z.string(),
});

const NoteForm = ({ note }: { note: NoteType }) => {
	const router = useRouter();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			subject: 'Untitled',
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

	const onSubmit = async (values: NoteInput) => {
		await editNote({ data: values, id: note.id });
	};

	useEffect(() => {
		if (isEditError || isEditSuccess) {
			toast(
				isEditError ? (
					<ErrorMessage message={getError(editError)} />
				) : (
					<SuccessMessage
						message={`Note successfully ${note?.id ? 'updated' : 'created'}`}
					/>
				)
			);
			router.refresh();
		}
	}, [note?.id, editError, isEditError, isEditSuccess, router]);

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
			</form>
		</Form>
	);
};

export default NoteForm;
