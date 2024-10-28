import * as z from 'zod';

const schemaMessage = {
	email_required: 'Email is required.',
	email_valid: 'Email must be a valid email address.',
	password_required: 'Password is required.',
	password_length: 'Password must be at least 6 characters.',
	name_required: 'Name is required.',
	name_length: 'Name must be at least 3 characters.',
	confirm_password_required: 'Confirm password is required.',
	password_match: 'Password and confirm password do not match.',
};

const nameSchema = z
	.string()
	.min(1, {
		message: schemaMessage.name_required,
	})
	.min(3, {
		message: schemaMessage.name_length,
	});

const emailSchema = z
	.string()
	.min(1, {
		message: schemaMessage.email_required,
	})
	.email(schemaMessage.email_valid);

const passwordSchema = z
	.string()
	.min(1, {
		message: schemaMessage.password_required,
	})
	.min(6, {
		message: schemaMessage.password_length,
	});

const confirmPasswordSchema = z.string().min(1, {
	message: schemaMessage.confirm_password_required,
});

export const LoginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});

export const RegistrationSchema = z
	.object({
		name: nameSchema,
		email: emailSchema,
		password: passwordSchema,
		confirm_password: confirmPasswordSchema,
	})
	.refine((data) => data.password === data.confirm_password, {
		path: ['confirm_password'],
		message: schemaMessage.password_match,
	});

export const ForgotPasswordSchema = z.object({
	email: emailSchema,
});

export const ResetPasswordSchema = z
	.object({
		password: passwordSchema,
		confirm_password: confirmPasswordSchema,
	})
	.refine((data) => data.password === data.confirm_password, {
		path: ['confirm_password'],
		message: schemaMessage.password_match,
	});
