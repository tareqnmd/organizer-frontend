'use client';
import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Form } from '@/components/ui/form';
import { NoteSchema, NoteSchemaType, NoteType } from '@/lib/helper/note';
import { noteFormItems } from '@/lib/helper/note/form-items';
import { getError } from '@/lib/utils';
import { useEditNoteMutation } from '@/store/features/note/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const NoteForm = ({ note }: { note: NoteType }) => {
	const router = useRouter();
	const form = useForm<NoteSchemaType>({
		resolver: zodResolver(NoteSchema),
		mode: 'onChange',
		defaultValues: {
			subject: note?.subject ?? 'Untitled',
			details: note?.details ?? '',
		},
	});

	const {
		watch,
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
