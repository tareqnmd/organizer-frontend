import { FormInputType } from '../shared/enum';

export const loginFormItems = [
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'password',
		label: 'Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Password',
		description: '',
		fieldRequired: true,
	},
];

export const registrationFormItems = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'password',
		label: 'Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Password',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'confirm_password',
		label: 'Confirm Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Confirm Password',
		description: '',
		fieldRequired: true,
	},
];

export const forgotPasswordFormItems = [
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
		fieldRequired: true,
	},
];

export const resetPasswordFormItems = [
	{
		name: 'password',
		label: 'Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Password',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'confirm_password',
		label: 'Confirm Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Confirm Password',
		description: '',
		fieldRequired: true,
	},
];
