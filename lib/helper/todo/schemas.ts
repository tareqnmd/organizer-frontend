import * as z from 'zod';

const message = {
	title_required: 'Title is required.',
	title_length: 'Title must be at least 3 characters.',
};

const titleSchema = z
	.string()
	.min(1, {
		message: message.title_required,
	})
	.min(3, {
		message: message.title_length,
	});

export const WorkspaceSchema = z.object({
	title: titleSchema,
});
