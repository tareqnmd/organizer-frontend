'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Form } from '@/components/ui/form';
import { NoteType } from '@/lib/helper/modules/note';
import { noteFormItems } from '@/lib/helper/modules/note/form-items';
import { getError } from '@/lib/utils';
import { useEditNoteMutation } from '@/store/features/note/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

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
		mode: 'onChange',
		defaultValues: {
			subject: 'Untitled',
			details: '',
		},
	});
	const {
		watch,
		setValue,
		formState: { isValid },
	} = form;

	const [editNote, { isError: isEditError, error: editError }] =
		useEditNoteMutation();

	const values = watch();

	useEffect(() => {
		if (isEditError) {
			toast.error(getError(editError));
		}
	}, [editError, isEditError, router]);

	useEffect(() => {
		if (note?.id) {
			setValue('subject', note.subject);
			setValue('details', note.details);
		}
	}, [setValue, note]);

	useEffect(() => {
		const handler = setTimeout(async () => {
			isValid &&
				(await editNote({
					data: { subject: values.subject, details: values.details },
					id: note.id,
				}));
		}, 1000);
		return () => clearTimeout(handler);
	}, [values.subject, values.details, isValid, editNote, note.id]);

	return (
		<Form {...form}>
			<div className="grid w-full gap-3">
				{noteFormItems.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}
			</div>
		</Form>
	);
};

export default memo(NoteForm);
