import * as z from 'zod';

const schemaMessage = {
	password_required: 'Password is required.',
	password_length: 'Password is too short - should be 6 chars minimum.',
	name_required: 'Name is required.',
	name_length: 'Name must be at least 3 characters.',
	confirm_password_required: 'Confirm password is required.',
	current_password_required: 'Current password is required.',
	password_match: 'Password and confirm password do not match.',
};

const nameSchema = z
	.string()
	.min(1, schemaMessage.name_required)
	.min(3, schemaMessage.name_length);
const emailSchema = z.string().email();
const passwordSchema = z
	.string()
	.min(1, schemaMessage.password_required)
	.min(6, schemaMessage.password_length);
const confirmPasswordSchema = z
	.string()
	.min(1, schemaMessage.confirm_password_required);
const currentPasswordSchema = z
	.string()
	.min(1, schemaMessage.current_password_required);

export const UserEditSchemaWithPassword = z
	.object({
		name: nameSchema,
		email: emailSchema,
		password: passwordSchema,
		confirm_password: confirmPasswordSchema,
		current_password: currentPasswordSchema,
	})
	.refine((data) => data.password === data.confirm_password, {
		path: ['confirm_password'],
		message: schemaMessage.password_match,
	});

export const UserEditSchemaWithoutPassword = z.object({
	name: nameSchema,
	email: emailSchema,
});
