import { FormInputType } from '../shared/enum';

export const loginFormItems = [
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
	},
	{
		name: 'password',
		label: 'Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Password',
		description: '',
	},
];

export const registrationFormItems = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
	},
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
	},
	{
		name: 'password',
		label: 'Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Password',
		description: '',
	},
	{
		name: 'confirm_password',
		label: 'Confirm Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Confirm Password',
		description: '',
	},
];

export const forgotPasswordFormItems = [
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
	},
];

export const resetPasswordFormItems = [
	{
		name: 'password',
		label: 'Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Password',
		description: '',
	},
	{
		name: 'confirm_password',
		label: 'Confirm Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Confirm Password',
		description: '',
	},
];
