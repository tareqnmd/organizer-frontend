import { FormInputType } from '../shared/enum';

export const userUpdateFormInputs = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
		required: true,
	},
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
		required: true,
		disabled: true,
	},
];

export const userUpdateFormInputsWithPassword = [
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
		disabled: true,
	},
	{
		name: 'current_password',
		label: 'Current Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Current Password',
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
