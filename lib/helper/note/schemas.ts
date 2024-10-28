import * as z from 'zod';

const message = {
	subject_required: 'Subject is required.',
	subject_length: 'Subject must be at least 3 characters.',
	details_required: 'Details is required.',
};

const detailsSchema = z.string();
const subjectSchema = z
	.string()
	.min(1, {
		message: message.subject_required,
	})
	.min(3, {
		message: message.subject_length,
	});

export const NoteSchema = z.object({
	subject: subjectSchema,
	details: detailsSchema,
});
