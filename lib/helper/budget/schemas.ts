import * as z from 'zod';

const messages = {
	name_length: 'Subject must be at least 3 characters.',
	name_required: 'Subject is required.',
	type_required: 'Type is required.',
};

const name = z
	.string()
	.min(1, {
		message: messages.name_required,
	})
	.min(3, messages.name_length);

const typeId = z.string().min(1, {
	message: messages.type_required,
});

export const BudgetTypeSchema = z.object({
	name,
});

export const BudgetCategorySchema = z.object({
	name,
	typeId,
});
