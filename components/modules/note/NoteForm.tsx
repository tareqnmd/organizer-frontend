'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import ErrorMessage from '@/components/common/message/ErrorMessage';
import SuccessMessage from '@/components/common/message/SuccessMessage';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { noteFormItems } from '@/lib/form-items/modules/note';
import { getError } from '@/lib/helper/common';
import { useCreateNoteMutation } from '@/store/features/note/api';
import { NoteType } from '@/types/modules/note/budget-note-types';
import { zodResolver } from '@hookform/resolvers/zod';
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
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			subject: '',
			details: '',
		},
	});
	const [createNote, { isLoading, isError, isSuccess, error }] =
		useCreateNoteMutation();
	const onSubmit = (values: NoteInput) => {
		createNote(values);
	};

	useEffect(() => {
		if (isError || isSuccess) {
			toast(
				isError ? (
					<ErrorMessage message={getError(error)} />
				) : (
					<SuccessMessage
						message={`Note successfully ${note?.id ? 'updated' : 'created'}`}
					/>
				)
			);
		}
	}, [isError, isSuccess, error, note?.id]);

	useEffect(() => {
		if (note?.subject) {
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
					disabled={isLoading}
					type="submit"
					className="w-max ml-auto"
				>
					{note?.subject ? 'Update' : 'Submit'}
				</Button>
			</form>
		</Form>
	);
};

export default NoteForm;
