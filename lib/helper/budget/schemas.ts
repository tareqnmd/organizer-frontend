import * as z from 'zod';

const messages = {
	name_length: 'Subject must be at least 3 characters.',
	name_required: 'Subject is required.',
	type_required: 'Type is required.',
	description_length: 'Description must be at least 3 characters.',
	description_required: 'Description is required.',
	category_required: 'Category is required.',
	amount_required: 'Amount is required.',
	amount_number: 'Amount must be a number.',
	date_required: 'Date is required.',
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

const description = z.string().min(3, {
	message: messages.description_length,
});

const categoryId = z.string().min(1, {
	message: messages.category_required,
});

const amount = z.coerce
	.number({
		required_error: messages.amount_required,
		invalid_type_error: messages.amount_number,
	})
	.positive();

const date = z.date({
	required_error: messages.date_required,
});

export const BudgetTypeSchema = z.object({
	name,
});

export const BudgetCategorySchema = z.object({
	name,
	typeId,
});

export const BudgetTransactionSchema = z.object({
	description,
	categoryId,
	amount,
	date,
});
